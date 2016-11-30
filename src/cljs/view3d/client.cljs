(ns view3d.client
(:require
  [csasync.proc :as asp]
  [czm.core :as czm]
  [view3d.controls :as ctl]
  [carr.move :as mov]
  [calc.dynamic :as dyn]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [cljs.reader :as rdr]
  [nightlight.repl-server]))

(def PORT 4444)
(def BSE-URL (str "http://localhost:" PORT "/"))
(def DIR-URL (str "http://localhost:" PORT "/directives/"))
(def CMD-URL (str "http://localhost:" PORT "/command/"))
(def CARRIER (volatile! {:name "-"
               :coord [0 0]
               :altitude 0
               :speed 0
               :course 0
               :step 0
               :bank-right 20
               :rudder {:target 0
                            :step 3
                            :time-out 1011}
               :elevator {:target 0
                            :step 7
                            :time-out 997}
               :engine {:target 0
                            :step 6
                            :time-out 1003}}))
(def DIR-TIO 1000)
(def CAR-TIO 1000)
(def HUD-TIO 831)
(def CAM-TIO 4000)
(defn num-val [x]
  (if (number? x) x (rdr/read-string x)))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn turn-and-bank [carr course]
  (let [arc (dyn/abs (-  (:course @carr) course))
       alt (:altitude @carr)]
  (if (or (< alt 90) (< arc 8))
    (mov/turn carr course 1)
    (let [bank (if (dyn/turn-right? (:course @carr) course)
                      (:bank-right @carr)
                      (- (:bank-right @carr)))
           [bank temp] (if (> arc 70) 
                                 [(* 2 bank) 2]
                                 [bank 1])]
      (mov/turn carr course temp)
      (dyn/check-diff-and-do carr
        [:rudder :target]
        [:course]
        (* 2 (get-in @carr [:rudder :step]))
        [:rudder :time-out]
        #(czm/camera :roll 0))
      (czm/camera :roll bank)))))

(defn error-handler [response]
  (let [{:keys [status status-text]} response]
  (println (str "AJAX ERROR: " status " " status-text))))

(defn onboard [call]
  (GET (str CMD-URL "onboard?callsign=" call)
  {:handler (fn [response])
   :error-handler error-handler}))

(defn carrier [callsign vehicle]
  (if (not= callsign (:name @CARRIER))
  (vswap! CARRIER assoc :name callsign))
(let [old-crs (:course @CARRIER)
       new-crs (:course vehicle)]
  (vswap! CARRIER merge vehicle)
  (mov/set-turn-point CARRIER)
  (if (> (dyn/abs (- old-crs new-crs)) 10)
    (turn-and-bank CARRIER new-crs))))

(defn view [dir]
  (czm/camera :view dir))

(defn pitch [deg]
  (let [deg (num-val deg)]
  (if (<= -180 deg 180)
    (czm/camera :pitch deg))))

(defn roll [deg]
  (let [deg (num-val deg)]
  (if (<= -180 deg 180)
    (czm/camera :roll deg))))

(defn course [crs]
  (let [crs (num-val crs)]
  (if (<= 0 crs 360)
    (turn-and-bank CARRIER crs))))

(defn speed [spd]
  (let [spd (num-val spd)]
  (let [tmp (if (< (:speed @CARRIER) 150) 2 1)]
    (mov/accel CARRIER spd tmp))))

(defn altitude [alt]
  (let [alt (num-val alt)]
  (let [tmp (if (< (:altitude @CARRIER) 1500) 1 3)]
    (mov/elevate CARRIER alt tmp))))

(defn directives-handler [response]
  (doseq [{:keys [directive] :as dir} (read-transit response)]
  ;;(println [:DIRECTIVE dir])
  (condp = directive
    :callsigns (let [{:keys [list]} dir]
            (ctl/callsigns list))
    :carrier (let [{:keys [callsign vehicle]} dir]
            (carrier callsign vehicle))
    :fly (let [{:keys [coord altitude course period]} dir
                 [lat lon] coord]
            (czm/fly-to lat lon altitude course period))
    :camera (vreset! czm/CAMERA (merge @czm/CAMERA dir))
    :turn (let [{:keys [course]} dir]
              (turn-and-bank CARRIER course))
    :accel (let [{:keys [speed temp]} dir]
              (mov/accel CARRIER speed temp))
    (println (str "Unknown directive: " [directive dir])))))

(defn receive-directives []
  (GET DIR-URL {:handler directives-handler
                       :error-handler error-handler}))

(defn camera-move [carr]
  (let [car @carr
       [lat lon] (:coord car)
       crs (:course car)
       alt (int (/ (:altitude car) 3.281))
       alt (if (< alt 10) 10 alt)]
    (czm/fly-to lat lon alt crs (/ CAM-TIO 1000))))

(defn on-load []
  (enable-console-print!)
(czm/init-3D-view BSE-URL :no-terrain)
(vswap! CARRIER assoc :step-hrs (double (/ CAR-TIO 3600000)))
;;(asp/repeater mov/move CARRIER CAR-TIO)
(asp/repeater ctl/show-flight-data CARRIER HUD-TIO)
;;(asp/repeater camera-move CARRIER CAM-TIO)
(asp/repeater receive-directives DIR-TIO)
(ctl/show-controls))


(set! (.-onload js/window) (on-load))
(carrier "R1"
 {:coord [60 30]
  :course 270
  :speed 315
  :altitude 3000})