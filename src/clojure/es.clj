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
  (println [:START-TIME tim])
(let [[h m :as hm] (seq (.split tim ":"))]
  (if (and (seq hm) (= (count hm) 2))
    (let [h (read-string h)
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

(defn takeoff-plan [apt]
  ;;(println [:TAKE-OFF-PLAN apt])
[[(apt "lat") (apt "lon")]	; init-coord
 (apt "alt") 		; init-alt
 (runway (apt "iata")) 	; init-crs
 [220 8] 		; [final-spd spd-accel]
 [1500 6]		; [final-alt   alt-accel]
])

(defn ini-turn-plan [fapt ftp]
  ;; bearing from airpotrt of departure to final turn start point
[(int (geo/bear-deg [(fapt "lat") (fapt "lon")] (first ftp)))])

(defn climb-plan []
  [33000	; cruise alt
 3	; climbing accel
])

(defn accel-plan []
  [500	; cruise spd
 1	; spd accel
])

(defn cruise-plan [ftp]
  ;; final turn start point
[(first ftp)])

(defn final-turn-plan [fapt tapt]
  ;; as backward takeoff plan
(let [fcrd [(fapt "lat") (fapt "lon")]
       tcrd [(tapt "lat") (tapt "lon")]	;; destination coordinates
       rudd (:rudder @mfs/CARRIER)
       trw (runway (tapt "iata"))		;; lannding runway
       rlc (geo/rev-bear trw)		;; reverse landing course
       ftpt (mfs/turn-end-point 
	(geo/future-pos tcrd rlc 7 1)	;; outer marker position 7 nm away 
	200 		;; final turn speed 200 knots
	rlc
	(geo/bear-deg tcrd fcrd) 	;; reverse general course
	(:step rudd) 
	(:accl rudd) 
	(:time-out rudd))] 
    [ftpt tcrd trw]))

