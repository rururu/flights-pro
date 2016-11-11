(ns carr.move
(:require
  [calc.dynamic :as dyn]))

(def PID180 (/ Math.PI 180))
(def NMRAD (/ Math.PI 10800))
(defn spherical-between [phi1 lambda0 c az]
  (let [cosphi1 (js/Math.cos phi1)
       sinphi1 (js/Math.sin phi1)
       cosaz (js/Math.cos az)
       sinaz (js/Math.sin az)
       sinc (js/Math.sin c)
       cosc (js/Math.cos c)
       phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
       lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
  [phi2 lam2]))

(defn set-turn-point [carr lat lon crs spd]
  (vswap! carr assoc :turn-point
  {:phi (* lat PID180)
   :lam (* lon PID180)
   :dir (* crs PID180)
   :rdh (* spd NMRAD)
   :clk 0}))

(defn move [carr]
  (let [car @carr
       tur (:turn-point car)
       hrs (:step-hrs car)
       elt (+ (:clk tur) hrs)
       way (* (:rdh tur) elt)
       [phi lam] (spherical-between (:phi tur) (:lam tur) way (:dir tur))]
  (vswap! carr assoc-in [:turn-point :clk] elt)
  [(/ phi PID180) (/ lam PID 180)]))

(defn turn [carr course temp]
  (vswap! carr assoc-in [:rudder :target] course)
(dyn/equalize carr :rudder :course dyn/course-closer temp))

(defn accel [carr speed temp]
  (vswap! carr assoc-in [:engine :target] speed)
(dyn/equalize carr :engine :speed dyn/step-closer temp))

(defn elevate [carr altitude temp]
  (vswap! carr assoc-in [:elevator :target] altitude)
(dyn/equalize carr :elevator :altitude dyn/step-closer temp))

