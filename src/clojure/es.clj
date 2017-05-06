(ns es
(:use protege.core)
(:require
  [pro.commands :as cmd]
  [async.proc :as asp]
  [cesium.core :as czs]
  [calc.core :as calc]
  [calc.geo :as geo]
  [fr24.client :as fr24]
  [my.flights.move :as mfs]
  [rete.core :as rt])
(:import
  java.util.Calendar))

(def HOST "http://localhost:")
(def PORT 4444)
(def URL-ICO {"INTERSECT" 	(str HOST PORT "/img/redpln32.png")
 "DESCEND" 	(str HOST PORT "/img/greenpln32.png")
 "CLIMB" 	(str HOST PORT "/img/bluepln32.png")
 "LEVEL" 	(str HOST PORT "/img/purplepln32.png")
 "GROUND" 	(str HOST PORT "/img/greypln32.png")
 "COUNTER"	(str HOST PORT "/img/r.png")
 "FOLLOWING"	(str HOST PORT "/img/b.png")
 "default"	(str HOST PORT "/img/info.png")
 "default-pois"	(str HOST PORT "/img/place3.jpeg")
 "landmark"	(str HOST PORT "/img/landmark.png")
 "edu"	(str HOST PORT "/img/edu.png")
 "mountain"	(str HOST PORT "/img/mountain.png")
 "river"	(str HOST PORT "/img/river.png")
 "railwaystation" (str HOST PORT "/img/railwaystation.png")
 "event"	(str HOST PORT "/img/event.png")
 "waterbody"	(str HOST PORT "/img/waterbody.png")
 "isle"	(str HOST PORT "/img/isle.png")
 "airport"	(str HOST PORT "/img/airport.png")
 "city"	(str HOST PORT "/img/city.png")})
(def ONB-PAUSE false)
(def INTS-TIME ;; forcast time for intersection in hours (6 min)
0.1)
(def INTS-DMIN ;; distance of intersection in nautical miles (~400 m)
0.215)
(defn round [x p]
  (let [md (mod x p)
       r (- x md)]
  (if (< md (/ p 2))
    r
    (+ r p))))

(defn put-on-map [id cs crd crs spd sts]
  (asp/pump-in (:instructions  cmd/CHN)
	{:instruct :create-update
	 :id id
	 :vehicle {:callsign cs
	               :coord crd
	               :course crs
	               :speed spd
	               :status sts}}))

(defn put-off-map [id]
  (asp/pump-in (:instructions  cmd/CHN)
	{:instruct :delete
	 :id id}))

(defn fly-onboard-to [cs crd2 crs1 crs2 spd2 alt2 per]
  ;;(println :FOB cs crd2 crs1 crs2 spd2 alt2 per)
(if (not ONB-PAUSE)
  (asp/pump-in (:directives cmd/CHN)
	{:directive :vehicle
	 :period per
	 :vehicle {
	   :coord crd2
	   :altitude (if (< alt2 cmd/GROUND-ALT) 
		cmd/GROUND-ALT 
		alt2)
	   :speed spd2
	   :course crs2
	   :old-course crs1}})))

(defn proc [z]
  (loop [n 1 y z]
  (if (seq y)
    (let [[onb1 cs1 t1 crd1 a1 c1 s1 gnd1] (first y)
           [onb2 cs2 t2 crd2 a2 c2 s2 gnd2] (second y)
           dt (if (and t1 t2) (- t2 t1) -7777)
           da (if (and a1 a2) (- a2 a1) -7777)
           ds (if (and s1 s2) (- s2 s1) -7777)
           va (if (and dt da) (/ da dt) -7777)
           vs (if (and dt ds) (/ ds dt) -7777)]
      (protege.core/ctpl [n onb2 cs2 t2 crd2 a2 c2 s2 gnd2 
        (read-string (format "%.1f" (float va)))
        (read-string (format "%.2f" (float vs)))])
      (recur (inc n) (rest y))) )))

(defn start-time [tim]
  ;;(println [:START-TIME tim])
(let [[h m :as hm] (seq (.split tim ":"))]
  (if (and (seq hm) (= (count hm) 2))
    (let [h (read-string h)
           m (if (.startsWith m "0") (.substring m 1) m)
           m (read-string m)]
      (if (and (number? h) (number? m) (<= 0 h 23) (<= 0 m 59))
        (let [cld (Calendar/getInstance)]
          (.set cld Calendar/HOUR_OF_DAY h)
          (.set cld Calendar/MINUTE m)
          (.set cld Calendar/SECOND 0)
          (int (/ (.getTimeInMillis cld) 1000))))))))

(defn runway [iata]
  (let [rw (if-let [ins (fifos "Airport" "iata" iata)]
              (let [rws (vec (svs ins "runways"))
                     idx (int (rand (count rws)))]
                (nth rws idx))
              0)]
  (if (> (rand 1) 0.5)
    rw
    (geo/norm-crs (+ rw 180)))))

(defn corr-alt-tab [atab elv]
  (letfn [(corr1 [[x y]]
	[x (+ y elv)])]
  (vec (map corr1 atab))))

(defn corr-alt [alt elv]
  (let [[a aa] alt]
  [(+ a elv) aa]))

(defn adjust-cruise [gen-dist cru-alt cru-spd alt-lnd spd-lnd elev prop min-alt min-spd]
  ;; return [cruise-altitude cruise-speed altitude-distance altitude-speed]
(loop [alt cru-alt spd cru-spd ad 0 sd 0]
  (if (and (> (first alt) min-alt) (> (first spd) min-spd))
    (let [[stim sdis] (mfs/speed-variation spd spd-lnd (:step prop) (:time-out prop))
           atim (mfs/altitude-variation alt alt-lnd (:step elev) (:time-out elev))
           adis (if (<= atim stim)
                    sdis
                    (+ sdis (* (- atim stim) (first spd))))]
      (if (< (* 2 adis) gen-dist)
        [adis sdis alt spd]
        (let [[a aa] alt
               [s sa] spd]
          (recur [(round (int (* 0.8 a)) 1000) aa] [(round (int (* 0.8 s)) 10) sa] adis sdis))))
    [ad sd alt spd])))

(defn as-vec [s]
  (if (string? s)
  (read-string (str "[" s "]"))
  (vec (map as-vec s))))

(defn specific-plan [fapt tapt]
  (if-let [gpi (fainst (cls-instances "GeneralPlan") nil)]
  (let [tpi (sv gpi "takeoff-plan")
         cpi (sv gpi "cruise-plan")
         lpi (sv gpi "landing-plan")
         fcrd [(fapt "lat") (fapt "lon")]
         tcrd [(tapt "lat") (tapt "lon")]
         falt (if (= cmd/TERRAIN "yes") (fapt "alt") 0)
         talt (if (= cmd/TERRAIN "yes") (tapt "alt") 0)]
        {:takeoff  {:speed (as-vec (sv tpi "speed"))
	:altitude (corr-alt (as-vec (sv tpi "altitude-vector")) falt)
	:initial-turn-course (as-vec (sv tpi "initial-turn-course"))}
         :cruise   {:speed (as-vec (sv cpi "speed"))
	:altitude (as-vec (sv cpi "altitude-vector"))
	:min-spd (read-string (sv cpi "min-speed"))
	:min-alt (read-string (sv cpi "min-altitude"))}
         :landing {:speed (as-vec (sv lpi "speed"))
	:altitude (corr-alt (as-vec (sv lpi "altitude-vector")) talt)
	:outer-marker-distance (read-string (sv lpi "outer-marker-distance"))
	:final-turn-course (as-vec (sv lpi "final-turn-course"))
	:altitude-graph (corr-alt-tab (as-vec (svs lpi "altitude-graph")) talt)
	:speed-graph (as-vec (svs lpi "speed-graph"))}
         :general-crs (int (geo/bear-deg fcrd tcrd))
         :general-dist (int (geo/distance-nm fcrd tcrd))
         :start-crd  fcrd
         :finish-crd tcrd
         :start-alt falt
         :finish-alt talt
         :start-run (runway (fapt "iata"))
         :finish-run (runway (tapt "iata"))})))

(defn takeoff-plan [spp]
  (let [tof (:takeoff spp)
       [x crsa] (:initial-turn-course tof)]
    (merge tof   {:from-crs 	[(:start-run spp) crsa]
	:to-crs 	[(:general-crs spp) crsa]})))

(defn cruise-plan [spp]
  (let [tof (:takeoff spp)
       cru (:cruise spp)
       lnd (:landing spp)
       car @mfs/CARRIER
       [ddist bdist calt cspd] 
         (adjust-cruise
	(calc.geo/distance-nm (:start-crd spp) (:finish-crd spp))
	(:altitude cru)
	(:speed cru)
	(:altitude lnd)
	(:speed lnd) 
	(:elevator car)
	(:propeller car)
	(:min-alt cru)
	(:min-spd cru))]
    (merge cru  {:altitude calt
	:speed cspd
	:descend-dist ddist
	:brake-dist bdist})))

(defn landing-plan [spp]
  (let [lnd (:landing spp)
       tcrd (:finish-crd spp)
       crs (:finish-run spp)		;; landing course
       rcrs (geo/rev-bear crs)		;; reverse landing course
       rgen (geo/rev-bear (:general-crs spp))	;; reverse general course
       [x crsa] (:final-turn-course lnd)	;; landing course accel
       [spd y spda] (:speed lnd)		;; final turn speed
       omd (:outer-marker-distance lnd)
       rudd (:rudder @mfs/CARRIER)
       ftcrd (mfs/turn-end-point 	
	(geo/future-pos tcrd rcrs omd 1) ;; outer-marker coordinates
	spd 
	rcrs	
	[rgen crsa] 
	(:step rudd) 
	(:time-out rudd))] 
    (merge lnd  {:final-turn-crd	ftcrd
	:landing-crs	[crs crsa] 	
     	:lannding-spd	[spd spda]})))

(defn intersect? [crd1 crs1 spd1 crd2 crs2 spd2 id1 id2]
  (when-let [crd3 (geo/future-intersect crd1 crs1 spd1 crd2 crs2 spd2 INTS-TIME)]
  (let [d1 (geo/distance-nm crd1 crd3)
         tmin (/ d1 spd1)
         crd4 (geo/future-pos crd2 crs2 spd2 tmin)
         dmin (geo/distance-nm crd3 crd4)]
     (if (< dmin INTS-DMIN)
       [dmin tmin]))))

(defn max-distance [spd1 spd2]
  (* (+ spd1 spd2) INTS-TIME))

(defn pom-and-link [id1 crd1 crs1 spd1 cs1 id2 crd2 crs2 spd2 cs2 dmin tmin]
  (put-on-map id1 cs1 crd1 crs1 spd1 "INTERSECT")
(put-on-map id2 cs2 crd2 crs2 spd2 "INTERSECT")
(asp/pump-in (:instructions  cmd/CHN)
	{:instruct :add-link
                         :ids [id1 id2]
                         :options {:weight 4
	                :title (str cs1 " - " cs2)
	                :color "red"
	                :dmin dmin	
	                :tmin tmin}}))

(defn flights-of-status [sta]
  (let [ff (if (= sta "ANY") 
            (rt/fact-list 'Flight)
            (rt/facts-with-slot-value 'Flight 'status = sta))
       cc (map #(rt/slot-value 'callsign %) ff)]
  (sort (set cc))))

