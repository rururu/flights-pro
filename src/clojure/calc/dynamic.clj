(ns calc.dynamic
)

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
  (let [dif (- to from)]
  (cond 
    (> dif 0) (+ from step)
    (< dif 0) (- from step)
    true to)))

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

(defn equalize [carr gear from to func]
  (let [step-fn (fn [c]
                      (vswap! c assoc to (func (from @c) (to @c) (get-in c [gear :step]))))
      stop-fn (fn [c]
                      (approx= (from @c) (to @c) (get-in c [gear :step])))]
  (asp/start-process (get-in carr [gear :step]) step-fn carr stop-fn carr 1000)))

