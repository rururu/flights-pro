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

