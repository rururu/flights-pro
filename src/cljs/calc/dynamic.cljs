(ns calc.dynamic
(:require
  [csasync.proc :as asp]
  [calc.core :as calc]
  [calc.geo :as geo]))

(defn step-closer [from to step]
  (cond
 (< from to) (+ from step)
 (> from to) (- from step)
 true to))

(defn course-closer [from to step]
  (let [dif (- to from)]
  (cond 
    (> dif 0)
      (if (<= dif 180)
        (+ from step)
        (geo/norm-crs (- from step)))
    (< dif 0) 
      (if (>= dif -180)
        (- from step)
        (geo/norm-crs (+ from step)))
    true to)))

(defn equalize [carr gear-key param-key param-fn closer-fn final-fn]
  (letfn [(proc-fn [carr]
                      (let [car @carr
                             g (gear-key car)
                             target (:target g)
                             step (* (:accel g) (:step g))
                             param (param-key car)]
                        (if (calc/approx= param target step)
                            (do (param-fn carr target)
                                  false)
                            (do (param-fn carr (closer-fn param target step))
                                  true))))]
  (vswap! carr assoc-in [gear-key :eqz-status] (volatile! "STOP"))
  (let [g (gear-key @carr)]
    (asp/start-process (:eqz-status g) 
                                   #(proc-fn carr) 
                                   (:time-out g)
	           final-fn))))

(defn check-diff-and-do [carr path1 path2 limit tio-pth final-fn]
  (letfn [(proc-fn [cr]
             (let [c @cr]
               (if (<= (calc/abs (- (get-in c path1)
                                           (get-in c path2))) limit)
                 (do (final-fn) false)
                 true)))]
  (vswap! carr assoc :cdad-status (volatile! "STOP"))
  (asp/start-process (:cdad-status @carr) 
                                 #(proc-fn carr)
                                 (get-in @carr tio-pth)
	         nil)))

(defn bank [old-crs new-crs [right-bank min-arc small-arc big-arc factor]]
  (letfn [(turn-right? [from to]
	(let [dif (- to from)]
	  (cond
	    (> dif 0)
	      (<= dif 180)
	    (< dif 0) 
	      (< dif -180))))]
  (let [arc (calc/abs (- old-crs new-crs))]
    (if (<= arc min-arc)
      0
      (let [bnk (cond
	(< arc small-arc) (int (/ right-bank factor)) 
	(> arc big-arc) (* right-bank factor)
	true right-bank)]
        (if (turn-right? old-crs new-crs)
            bnk
            (- bnk)))))))

