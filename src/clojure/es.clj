(ns es
(:require
  [pro.commands :as cmd]
  [async.proc :as asp]
  [cesium.core :as czs]
  [calc.core :as calc]
  [calc.geo :as geo]
  [fr24.client :as fr24]
  [my.flights.move :as mfs])
(:import
  java.util.Calendar))

(def HOST "http://localhost:")
(def PORT 4444)
(def URL-ICO {"INTERSECT" 	(str HOST PORT "/img/redpln32.png")
 "DESCEND" 	(str HOST PORT "/img/greenpln32.png")
 "CLIMB" 	(str HOST PORT "/img/bluepln32.png")
 "LEVEL" 	(str HOST PORT "/img/purplepln32.png")
 "GROUND" 	(str HOST PORT "/img/greypln32.png")
 "COUNTER"	(str HOST PORT "/img/b.png")
 "FOLLOWING"	(str HOST PORT "/img/r.png")})
(def RUNWAYS (volatile! 
  {"URE" 180 
   "LED" 287 
   "LHR" 90 
   "EWR" 26
   "TAY" 269 
   "HEL" 227 
   "FRA" 70 
   "KEF" 180
   "KDL" 147 
   "JFK" 301 
   "BOS" 200 
   "LGA" 122
   "PHL" 76}))
(def GENPLAN {:takeoff 
  {:speed [220 8]
   :altitude [1500 6]
   :initial-turn-course [-1 2]}
 :cruise 
  {:speed [500 1]
   :altitude [33000 8]
   :min-spd 220
   :min-alt 4000}
 :landing 
  {:speed [180 1 6]
   :altitude [2000 8]
   :outer-marker-distance 7
   :final-turn-course [-1 1]
   :altitude-graph
     [[0.1 0][0.5 15][2 200][7 2000]] ;; x - dist, y - alt
   :spdeed-graph
     [[0.0 0][0.1 10][0.5 100][3 180]]} ;; x - dist, y - spd
})
(def ONB-PAUSE false)
(defn round [x p]
  (let [md (mod x p)
       r (- x md)]
  (if (< md (/ p 2))
    r
    (+ r p))))

(defn put-on-map [id crd crs spd sts]
  (asp/pump-in (:instructions  cmd/CHN)
	{:instruct :create-update
	 :id id
	 :vehicle {:coord crd
	               :course crs
	               :speed spd
	               :status sts}}))

(defn put-off-map [id]
  (asp/pump-in (:instructions  cmd/CHN)
	{:instruct :delete
	 :id id}))

(defn fly-onboard-to [csn crs1 crs2 crd2 spd2 alt2 per]
  (if (not ONB-PAUSE)
  (let [crd3 (geo/future-pos crd2 crs2 spd2 (/ per 3600))
         per3 (* 2 per)]
    (asp/pump-in (:directives cmd/CHN)
	{:directive :fly-onboard
	 :callsign csn
	 :vehicle {
	   :coord crd2
	   :altitude alt2
	   :speed spd2
	   :course crs2}
	 :old-course crs1
	 :period per3}))))

(defn go-onboard [csg crd crs spd alt]
  (def ONB-PAUSE true)
(asp/delayer #(def ONB-PAUSE false) 8000)
(asp/pump-in (:directives cmd/CHN)
	{:directive :carrier
	 :callsign csg
	 :vehicle {:coord crd
	               :course crs
	               :speed spd
	               :altitude alt}}))

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
  (let [rw (if-let [rw (@RUNWAYS iata)]
              (int rw)
              0)]
  (if (> (rand 1) 0.5)
    rw
    (geo/norm-crs (+ rw 180)))))

(defn corr-alt-tab [atab elv]
  (letfn [(corr1 [[x y]]
	(if (> y 0)
	  [x (+ y elv)]
	  [x y]))]
  (vec (map corr1 atab))))

(defn corr-alt [alt elv]
  (let [[a aa] alt]
  (if (> a 0)
    [(+ a elv) aa]
    alt)))

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

(defn specific-plan [gen fapt tapt]
  (let [tof (:takeoff gen)
       cru (:cruise gen)
       lnd (:landing gen)
       fcrd [(fapt "lat") (fapt "lon")]
       tcrd [(tapt "lat") (tapt "lon")]
       falt (fapt "alt")
       talt (tapt "alt")
       spp (assoc gen :takeoff (merge tof
		{:altitude (corr-alt (:altitude tof) falt)})
	        :landing (merge lnd
		{:altitude (corr-alt (:altitude lnd) talt)
		 :table-alt (corr-alt-tab (:table-alt lnd) talt)}))]
    (merge spp {:general-crs	(int (geo/bear-deg fcrd tcrd))
	:general-dist	(int (geo/distance-nm fcrd tcrd))
	:start-crd 	fcrd
	:finish-crd 	tcrd
	:start-alt 	falt
	:finish-alt 	talt
	:start-run 	(runway (fapt "iata"))
	:finish-run 	(runway (tapt "iata"))})))

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

