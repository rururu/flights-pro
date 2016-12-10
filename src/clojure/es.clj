(ns es
(:require
  [pro.server :as serv]
  [async.proc :as asp]))

(def HISTORY-SEC 80)
(defn put-on-map [id crd crs spd sts]
  (asp/pump-in serv/INS-CHN
	{:instruct :create-update
	 :id id
	 :vehicle {:coord crd
	               :course crs
	               :speed spd
	               :status sts}}))

(defn put-off-map [id]
  (asp/pump-in serv/INS-CHN
	{:instruct :delete
	 :id id}))

(defn fly-onboard-to [csn crs1 crs2 crd2 spd2 alt2 per]
  (let [crd3 (geo/future-pos crd2 crs2 spd2 (/ per 3600))
       per3 (* 2 per)]
  (asp/pump-in serv/DIR-CHN
	{:directive :fly-onboard
	 :callsign csn
	 :vehicle {
	   :coord crd2
	   :altitude alt2
	   :speed spd2
	   :course crs2}
	 :old-course crs1
	 :period per3})))

(defn onboard [crd crs spd alt csg]
  (println [:ONBOARD csg])
(asp/pump-in serv/DIR-CHN
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

