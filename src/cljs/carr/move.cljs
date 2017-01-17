(ns carr.move
(:require
  [calc.dynamic :refer 
	[equalize
	 course-closer
	 step-closer]]))

(def PID180 (/ Math.PI 180))
(def NMRAD (/ Math.PI 10800))
(defn spherical-between-js [phi1 lambda0 c az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [phi2 lam2]))

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
       [phi lam] (spherical-between-js (:phi tur) (:lam tur) way (:dir tur))]
  (vswap! carr assoc :coord [(/ phi PID180) (/ lam PID180)]
                                :turn-point (assoc tur :clk elt))))

(defn turn
  ([carr course]
  (vswap! carr assoc-in [:rudder :target] course)
  (equalize carr :rudder set-course :course course-closer))
([carr course accel]
  (vswap! carr assoc-in [:rudder :accel] accel)
  (turn carr course)))

(defn accel
  ([carr speed]
  (vswap! carr assoc-in [:engine :target] speed)
  (equalize carr :engine set-speed :speed step-closer))
([carr speed acl]
  (vswap! carr assoc-in [:engine :accel] acl)
  (accel carr speed)))

(defn elevate
  ([carr altitude]
  (vswap! carr assoc-in [:elevator :target] altitude)
  (equalize carr :elevator set-altitude :altitude step-closer))
([carr altitude accel]
  (vswap! carr assoc-in [:elevator :accel] accel)
  (elevate carr altitude)))

