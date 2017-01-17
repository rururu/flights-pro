(ns my.flights.move
(:require
  [calc.core :as calc]
  [calc.geo :as geo]
  [async.proc :as asp]))

(def PID180 (/ Math/PI 180))
(def NMRAD (/ Math/PI 10800))
(def TIO {:carrier 1000
 :camera 4200
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831})
(def CARRIER (volatile! {:mode "?"
               :coord [0 0]
               :altitude 0
               :speed 0
               :course 0
               :step-hrs (double (/ (:carrier TIO) 3600000))
               :bank-params [20 8 64 2]
               :rudder {:target 0
                            :step 3
	    :accel 1
                            :time-out 1011}
               :elevator {:target 0
                            :step 4
	    :accel 1
                            :time-out 997}
               :engine {:target 0
                            :step 1
	    :accel 1
                            :time-out 1003}}))
(def CARRIERS (volatile! {}))
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

(defn equalize [carr gear param-fn param closer]
  (letfn [(proc-fn [cr]
                      (let [c @cr
                             g (get c gear)
                             target (:target g)
                             step (* (:accel g) (:step g))]
                        (if (calc/approx= (param c) target step)
                            (do (param-fn cr target)
                                  false)
                            (do (param-fn cr (closer (param c) target step))
                                  true))))]
  (vswap! carr assoc-in [gear :eqz-status] (volatile! "STOP"))
  (let [g (get @carr gear)]
    (asp/start-process (:eqz-status g) 
                                   #(proc-fn carr) 
                                   (:time-out g)))))

(defn accel [carr speed]
  (vswap! carr assoc-in [:engine :target] speed)
(equalize carr :engine set-speed :speed step-closer))

(defn elevate [carr altitude]
  (vswap! carr assoc-in [:elevator :target] altitude)
(equalize carr :elevator set-altitude :altitude step-closer))

(defn turn
  ([carr course]
  (turn carr course 1))
([carr course accel]
  (vswap! carr assoc-in [:rudder :target] course)
  (vswap! carr assoc-in [:rudder :accel] accel)
  (equalize carr :rudder set-course :course course-closer)))

(defn add-my-flight [id call coord crs spd alt]
  (let [carr (volatile! (assoc (merge {} @CARRIER)
	:mode call
   	:coord coord
   	:course crs
   	:speed spd
   	:altitude alt))]
  (vswap! carr assoc-in [:elevator :accel] 4)
  (set-turn-point carr)
  (vswap! CARRIERS assoc id carr)))

(defn rem-my-flight [id]
  (vswap! CARRIERS dissoc id))

(defn control [id func val]
  (if-let [carr (get @CARRIERS id)]
  (func carr val)))

(defn start-movement []
  (letfn [(move-all [carrs]
	(doseq [carr (vals @carrs)]
	  (move carr)))]
  (asp/repeater move-all CARRIERS (:carrier TIO))
  (println (str "  My Flights Movement Interval: " (:carrier TIO)))))

