(ns csasync.proc
(:require 
  [cljs.core.async :refer [<! timeout]])
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
  (println [:SP @status time-out])
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

