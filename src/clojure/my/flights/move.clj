(ns my.flights.move
(:require
  [calc.core :as calc]
  [calc.geo :as geo]
  [async.proc :as asp]))

(def PID180 (/ Math/PI 180))
(def NMRAD (/ Math/PI 10800))
(def TIO {:carrier 1000
 :camera 3030
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :new-czml-doc 4000
 :manual-data 6000
 :ext-data-popup 60000})
(def CARRIER (volatile! {:mode "MANUAL"
               :coord [60 30]
               :altitude 4000
               :speed 160
               :course 270
               :status "LEVEL"
               :step-hrs (double (/ (:carrier TIO) 3600000))
               ;; [middle-bank small-arc middle-arc big-arc factor]
               :bank-params [12 2 16 64 2]
               :rudder {:target 0
                            :step 3
	    :accel 1
                            :time-out 1017}
               :elevator {:target 0
                            :step 4
	    :accel 1
                            :time-out 997}
               :propeller {:target 0
                            :step 1
	    :accel 1
                            :time-out 2003}}))
(def defCARRIERS (defonce CARRIERS (volatile! {})))
(defn set-turn-point
  ([carr]
  (let [car @carr]
    (set-turn-point carr (:coord car) (:course car) (:speed car))))
([carr [lat lon] crs spd]
  (vswap! carr assoc :turn-point
    {:phi (* lat PID180)
     :lam (* lon PID180)
     :dir (* crs PID180)
     :rdh (* spd NMRAD)
     :clk 0})))

(defn set-course [carr crs]
  (let [car @carr]
  (set-turn-point carr (:coord car) crs (:speed car))
  (vswap! carr assoc :course crs)))

(defn set-speed [carr spd]
  (let [car @carr]
  (set-turn-point carr (:coord car) (:course car) spd)
  (vswap! carr assoc :speed spd)))

(defn set-altitude [carr alt]
  (vswap! carr assoc :altitude alt))

(defn move [carr]
  (let [car @carr
       tur (:turn-point car)
       hrs (:step-hrs car)
       elt (+ (:clk tur) hrs)
       way (* (:rdh tur) elt)
       [phi lam] (geo/spherical-between (:phi tur) (:lam tur) way (:dir tur))]
  (vswap! carr assoc :coord [(/ phi PID180) (/ lam PID180)]
                                :turn-point (assoc tur :clk elt))))

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

(defn accel
  ([carr speed]
  (vswap! carr assoc-in [:propeller :target] speed)
  (equalize carr :propeller :speed set-speed step-closer nil))
([carr speed acl]
  (vswap! carr assoc-in [:propeller :accel] acl)
  (accel carr speed)))

(defn elevate
  ([carr altitude]
  (vswap! carr assoc-in [:elevator :target] altitude)
  (equalize carr :elevator :altitude set-altitude step-closer nil))
([carr altitude accel]
  (vswap! carr assoc-in [:elevator :accel] accel)
  (elevate carr altitude)))

(defn turn
  ([carr course]
  (turn carr course nil))
([carr course final-fn]
  (vswap! carr assoc-in [:rudder :target] course)
  (equalize carr :rudder :course set-course course-closer final-fn))
([carr course accel final-fn]
  (vswap! carr assoc-in [:rudder :accel] accel)
  (turn carr course final-fn)))

(defn add-my-flight [id call coord crs spd alt]
  (let [carr (volatile! (assoc (merge {} @CARRIER)
	:mode call
   	:coord coord
   	:course crs
   	:speed spd
   	:altitude alt))]
  (set-turn-point carr)
  (vswap! CARRIERS assoc id carr)))

(defn rem-my-flight [id]
  (vswap! CARRIERS dissoc id))

(defn control [id func arg]
  (if-let [carr (get @CARRIERS id)]
  (if (vector? arg)
    (func carr (first arg) (second arg))
    (func carr arg))))

(defn start-movement []
  (letfn [(move-all [carrs]
	(doseq [carr (vals @carrs)]
	  (move carr)))]
  (asp/repeater move-all CARRIERS (:carrier TIO))
  (println (str "  My Flights Movement Interval: " (:carrier TIO)))))

(defn turn-end-point [ipoint spd crs1 [crs2 crs-acl] crs-stp crs-tio]
  ;; Calculates end point of turn
(if (not= crs1 crs2)
  (let [step (* crs-stp crs-acl)
         tioh (/ crs-tio 3600000)]
    (loop [crs crs1 point ipoint]
      (if (< (Math/abs (- crs crs2)) step)
        point
        (recur (geo/norm-crs (course-closer crs crs2 step)) 
                  (geo/future-pos point crs spd tioh)))))
  ipoint))

(defn speed-variation [[ini-spd x] [fin-spd spd-acl] spd-stp spd-tio]
  ;; Calculates time (hrs) and distance (nm)
(if (= ini-spd fin-spd)
  [0 0]
  (let [step (* spd-stp spd-acl)
         tioh (float (/ spd-tio 3600000))
         [func pred] (if (> ini-spd fin-spd) [- <=] [+ >=])]
    (loop [spd ini-spd tim 0 dist 0]
      (if (pred spd fin-spd)
        [tim dist]
        (recur (func spd step) (+ tioh tim) (+ (* spd tioh) dist)))))))

(defn altitude-variation [[ini-alt x] [fin-alt alt-acl] alt-stp alt-tio]
  ;; Calculates time (hrs)
(if (= ini-alt fin-alt)
  0
  (let [step (* alt-stp alt-acl)
         tioh (float (/ alt-tio 3600000))
         adif (if (> ini-alt fin-alt) (- ini-alt fin-alt) (- fin-alt ini-alt))]
    (* (/ adif step) tioh))))

