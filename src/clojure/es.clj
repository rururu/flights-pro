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

(defn fly-to [crd alt crs per]
  (let [alt (/ alt 3.28084)
       alt (if (< alt 10) 10 alt)]
  (asp/pump-in serv/DIR-CHN
	{:directive :fly
	 :coord crd
	 :altitude alt
	 :course crs
	 :period per})))

(defn onboard [crd crs spd alt csg]
  (println [:ONBOARD csg])
(asp/pump-in serv/DIR-CHN
	{:directive :carrier
	 :callsign csg
	 :vehicle {:coord crd
	               :course crs
	               :speed spd
	               :altitude alt}}))

