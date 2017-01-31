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
   "LGA" 122}))
(def GENPLAN {:takeoff 
  {:speed [220 8]
   :altitude [1500 6]
   :initial-turn-course [-1 2]}
 :cruise 
  {:speed [500 1]
   :altitude [33000 8]}
 :landing 
  {:speed [180 1 6]
   :altitude [2000 8]
   :outer-marker-distance 7
   :final-turn-course [-1 1]
   :table-alt
     [[0.05 0][0.5 15][2 200][7 2000]] ;; x - dist, y - alt
   :table-spd
     [[0.05 5][0.5 140][3 180]]}	;; x - dist, y - spd
})
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
	 :period per3})))

(defn onboard [csg crd crs spd alt]
  (println [:ONBOARD csg])
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

(defn corr-alt-tab [tab h]
  ;; add h to all but last yy
(letfn [(corr1 [[x y]]
	[x (+ y h)])]
 (vec (map corr1 tab))))

(defn takeoff-plan [fapt tapt]
  (let [fcrd [(fapt "lat") (fapt "lon")]
       tcrd [(tapt "lat") (tapt "lon")]
       tof (:takeoff GENPLAN)
       [x crsa] (:initial-turn-course tof)]
  {:from-crd 	fcrd
   :from-alt 	(fapt "alt") 
   :initial-crs 	[(runway (fapt "iata")) crsa]
   :takeoff-alt 	(:altitude tof)			
   :takeoff-spd (:speed tof)
   :general-crs 	[(int (geo/bear-deg fcrd tcrd)) crsa]
   :to-crd 	tcrd
   :initial-turn "OFF"}))

(defn climb-plan []
  (let [cru (:cruise GENPLAN)]
  {:climb-alt	(:altitude cru) 
   :climb-spd	(:speed cru)}))

(defn cruise-plan [lp]
  ;; final turn start point
{:target-crd (:final-turn-crd lp)})

(defn landing-plan [tofp tapt]
  (let [fcrd (:from-crd tofp)		;; departure coordinates
       tcrd (:to-crd tofp)		;; destination coordinates
       lalt (tapt "alt")		;; landing altitude
       crs (runway (tapt "iata"))		;; lannding course
       rcrs (geo/rev-bear crs)		;; reverse landing course
       rgen (geo/bear-deg tcrd fcrd)	;; reverse general course
       lnd (:landing GENPLAN)
       [x crsa] (:final-turn-course lnd)	;; landing course accel
       [spd y spda] (:speed lnd)		;; final turn speed
       omd (:outer-marker-distance lnd)
       rudd (:rudder @mfs/CARRIER)
       ftsp (mfs/turn-end-point 	
	(geo/future-pos tcrd rcrs omd 1) ;; outer-marker coordinates
	spd 
	rcrs	
	[rgen crsa] 
	(:step rudd) 
	(:time-out rudd))] 	
    {:final-turn-crd 	ftsp
     :landing-crs	[crs crsa] 	
     :lannding-spd	[spd spda]
     :lannding-alt	lalt
     :table-alt		(corr-alt-tab (:table-alt lnd) lalt)
     :table-spd		(:table-spd lnd)
     :stop-crd		tcrd
     :status		"OFF"}))

(defn descend-plan [lp]
  (let [cru (:cruise GENPLAN)
       lnd (:landing GENPLAN)
       prop (:propeller @mfs/CARRIER)
       elev (:elevator @mfs/CARRIER)
       [stim sdis] (mfs/speed-variation	;; deceleration time and distance
	  (:speed cru)
	  (:speed lnd) 
	  (:step prop) 
	  (:time-out prop))
       atim (mfs/altitude-variation	;; descend time
	  (:altitude cru)
	  (:altitude lnd)
	  (:step elev)
	  (:time-out elev))
       adis (if (<= atim stim)
                sdis
                (+ sdis (* (- atim stim) (first (:speed cru)))))]
  {:status "OFF"
   :alt-dist adis
   :alt-target (:altitude lnd)
   :spd-dist sdis 
   :spd-target (:speed lnd) 
   :target-crd (:final-turn-crd lp)}))

