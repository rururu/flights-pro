(ns calc.dynamic
(:require
  [csasync.proc :as asp]))

(defn abs [x]
  (if (< x 0) (- x) x))

(defn approx= [x y eps]
  (cond
  (> x y) (< (- x y) eps)
  (< x y) (< (- y x) eps)
  true true))

(defn linint [x [x1 y1] [x2 y2]]
  (float (+ y1 (/ (* (- y2 y1) (- x x1)) (- x2 x1)))))

(defn tabfun [x table]
  ;; left and right borders in table are exclusive
(let [[lo hi] (split-with #(< (first %) x) table)]
  (if (seq lo)
    (if (seq hi)
      (linint x (last lo) (first hi))
      [:UB (second (last table))])
    [:LB (second (first table))])))

(defn i-mono-tabfun [y table]
  ;; inverse function, only for monotone(!!!) functions
(tabfun y (map #(vector (second %)(first %)) table)))

(defn smooth-tabfun [x table]
  (let [res (tabfun x table)]
  (if (vector? res) (second res) res)))

(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

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
        (norm-crs (- from step)))
    (< dif 0) 
      (if (>= dif -180)
        (- from step)
        (norm-crs (+ from step)))
    true to)))

(defn equalize [carr gear param-fn param closer]
  (letfn [(proc-fn [cr]
                      (let [c @cr
                             g (get c gear)
                             target (:target g)
                             step (* (:accel g) (:step g))]
                        (if (approx= (param c) target step)
                            (do (param-fn cr target)
                                  false)
                            (do (param-fn cr (closer (param c) target step))
                                  true))))]
  (vswap! carr assoc-in [gear :eqz-status] (volatile! "STOP"))
  (let [g (get @carr gear)]
    (asp/start-process (:eqz-status g) 
                                   #(proc-fn carr) 
                                   (:time-out g)))))

(defn check-diff-and-do [carr path1 path2 limit tio-pth final-fn]
  (letfn [(proc-fn [cr]
             (let [c @cr]
               (if (< (abs (- (get-in c path1)
                                   (get-in c path2))) limit)
                 (do (final-fn) false)
                  true)))]
  (vswap! carr assoc :cdad-status (volatile! "STOP"))
  (asp/start-process (:cdad-status @carr) 
                                 #(proc-fn carr)
                                 (get-in @carr tio-pth))))

(defn bank [old-crs new-crs [right-bank small-arc big-arc big-factor]]
  (letfn [(turn-right? [from to]
	(let [dif (- to from)]
	  (cond
	    (> dif 0)
	      (<= dif 180)
	    (< dif 0) 
	      (< dif -180))))]
  (let [arc (abs (- old-crs new-crs))
         arc (if (> arc 180)
                 (- 360 arc)
                 arc)]
    (if (< arc small-arc)
        0
        (let [bnk (if (> arc big-arc)
	(* right-bank big-factor)
	right-bank)]
          (if (turn-right? old-crs new-crs)
           bnk
           (- bnk)))))))

