(ns async.proc
(:require 
  [clojure.core.async :refer [chan alts!! put! <! go timeout close!]]))

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
  ([status proc-fn time-out]
  (when (= @status "STOP") 
    (vreset! status "RUN")
    (go (do 
          (while (and (= @status "RUN")
                            (proc-fn))
                (<! (timeout time-out)))
          (vreset! status "STOP")))
    @status))
([status proc-fn param time-out]
  (when (= @status "STOP") 
    (vreset! status "RUN")
    (go (do 
          (while (and (= @status "RUN")
                            (proc-fn param))
                (<! (timeout time-out)))
          (vreset! status "STOP")))
    @status)))

(defn stop-process [status]
  (vreset! status "STOP"))

(defn running? [status]
  (= @status "RUN"))

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

(defn close-chan [chn]
  (close! chn))

