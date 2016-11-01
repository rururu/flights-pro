(ns async.proc
(:require 
  [clojure.core.async :refer [chan alts!! put! <! go timeout]]))

(defn repeater
  ([func time-out]
  (go (while true
           (func)
           (<! (timeout time-out)))))
([func param time-out]
  (go (while true
           (func param)
           (<! (timeout time-out))))))

(defn start-process
  ([status-vol proc-fn cond-fn time-out]
  (when (not= @status-vol "RUNNING") 
    (vreset! status-vol "RUNNING")
    (go (do 
          (while (and (= @status-vol "RUNNING")
                          (or (nil? cond-fn) (not (cond-fn))))
                (proc-fn)
                (<! (timeout time-out)))
          (vreset! status-vol "STOPPED")))
    @status-vol))
([status-vol proc-fn proc-prm cond-fn cond-prm time-out]
  (when (not= @status-vol "RUNNING") 
    (vreset! status-vol "RUNNING")
    (go (do 
          (while (and (= @status-vol "RUNNING")
                          (or (nil? cond-fn) (not (cond-fn cond-prm))))
                (proc-fn proc-prm)
                (<! (timeout time-out)))
          (vreset! status-vol "STOPPED")))
    @status-vol)))

(defn stop-process [status-vol]
  (vreset! status-vol "STOP"))

(defn running? [status-vol]
  (= @status-vol "RUNNING"))

(defn pump-in [chn val]
  (put! chn val))

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
  (if (= bit :none)
    bits
    (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn one-out [chn]
  (alts!! chn))

(defn mk-chan []
  (chan))

