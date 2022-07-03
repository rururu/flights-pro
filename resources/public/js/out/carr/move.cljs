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

(defn spherical-azimuth-js [phi1 lambda0 phi lambda]
  (let [ldiff (- lambda lambda0)
       cosphi (js/Math.cos phi)]
  (js/Math.atan2 (* cosphi (js.Math.sin ldiff))
                      (- (* (js/Math.cos phi1) (js/Math.sin phi)) 
                          (* (js/Math.sin phi1) cosphi (js/Math.cos ldiff))))))

(defn bear-deg-js [[la1 lo1] [la2 lo2]]
  (let [fi1 (* la1 PID180)
       ld1 (* lo1 PID180)
       fi2 (* la2 PID180)
       ld2 (* lo2 PID180)
       rad (spherical-azimuth-js fi1 ld1 fi2 ld2)
       deg (/ rad PID180)]
  (cond
    (< deg 0) (+ deg 360.0)
    (> deg 360.0) (- deg 360.0)
    true deg)))

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
  (turn carr course nil))
([carr course final-fn]
  (vswap! carr assoc-in [:rudder :target] course)
  (equalize carr :rudder :course set-course course-closer final-fn))
([carr course accel final-fn]
  (vswap! carr assoc-in [:rudder :accel] accel)
  (turn carr course final-fn)))

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

