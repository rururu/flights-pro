(ns carr.move
(:require
  [calc.dynamic :as dyn]
  [czm.core :as czm]))

(def PID180 (/ Math.PI 180))
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

(defn future-pos [[lat lon] crs spd tim]
  (let [phi (* PID180 lat)
       lam (* PID180 lon)
       dir (* PID180 crs)
       way (* spd tim)
       way (* PID180 (/ way 60))
       [phi2 lam2] (spherical-between phi lam way dir)]
  [(/ phi2 PID180) (/ lam2 PID180)]))

(defn move [carr]
  (let [car @carr]
  (vswap! carr assoc :coord
    (future-pos (:coord car) 
                       (:course car)
                       (:speed car)
                       (:step car)))))

(defn turn [carr course temp]
  (vswap! carr assoc-in [:rudder :target] course)
(dyn/equalize carr :rudder :course dyn/course-closer temp))

(defn turn-and-bank [carr course]
  (let [arc (dyn/abs (-  (:course @carr) course))]
  (if (< arc 10)
    (turn carr course 1)
    (let [bank (if (dyn/turn-right? (:course @carr) course)
                      (:bank-right @carr)
                      (- (:bank-right @carr)))
           [bank temp] (if (> arc 70) 
                                 [(* 2 bank) 2]
                                 [bank 1])]
      (turn carr course temp)
      (dyn/check-diff-and-do carr
        [:rudder :target]
        [:course]
        (* 2 (get-in @carr [:rudder :step]))
        [:rudder :time-out]
        #(czm/camera :roll 0))
      (czm/camera :roll bank)))))

(defn accel [carr speed temp]
  (vswap! carr assoc-in [:engine :target] speed)
(dyn/equalize carr :engine :speed dyn/step-closer temp))

(defn elevate [carr altitude temp]
  (vswap! carr assoc-in [:elevator :target] altitude)
(dyn/equalize carr :elevator :altitude dyn/step-closer temp))

