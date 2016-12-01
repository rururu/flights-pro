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
  (asp/pump-in serv/DIR-CHN
	{:directive :fly-onboard
	 :callsign csn
	 :vehicle {
	   :coord crd2
	   :altitude alt2
	   :speed spd2
	   :course crs2}
	 :old-course crs1
	 :period per}))

(defn onboard [crd crs spd alt csg]
  (println [:ONBOARD csg])
(asp/pump-in serv/DIR-CHN
	{:directive :carrier
	 :callsign csg
	 :vehicle {:coord crd
	               :course crs
	               :speed spd
	               :altitude alt}}))

