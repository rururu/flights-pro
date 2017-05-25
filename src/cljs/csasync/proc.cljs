(ns csasync.proc
(:require 
  [cljs.core.async :refer [<! timeout close!]])
(:require-macros 
  [cljs.core.async.macros :refer [go]]))

(defn repeater
  ([func time-out]
  (go (while true
           (func)
           (<! (timeout time-out)))))
([func param time-out]
  (go (while true
           (func param)
           (<! (timeout time-out))))))

(defn start-process [status proc-fn time-out final-fun]
  (when (not= @status "RUN") 
  (vreset! status "RUN")
  (go (do 
          (while (and (= @status "RUN")
                            (proc-fn))
                (<! (timeout time-out)))
          (if (some? final-fun) (final-fun))
          (vreset! status "STOP")))
  @status))

(defn stop-process [status]
  (vreset! status "FINISH"))

(defn running? [status]
  (= @status "RUN"))

(defn close-chan [chn]
  (close! chn))

(defn delayer [func time]
  (go (<! (timeout time))
  (func)))

