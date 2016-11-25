(ns es
(:require
  [pro.server :as serv]
  [async.proc :as asp]))

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

(defn fly-to [crs spd alt]
  (asp/pump-in serv/DIR-CHN
	{:directive :fly
	 :course crs
	 :speed spd
	 :altitude alt}))

(defn onboard [crd crs spd alt csg]
  (asp/pump-in serv/DIR-CHN
	{:directive :carrier
	 :callsign csg
	 :vehicle {:coord crd
	               :course crs
	               :speed spd
	               :altitude alt}}))

