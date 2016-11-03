(ns view3d.client
(:require
  [csasync.proc :as asp]
  [czm.core :as czm]
  [view3d.controls :as ctl]
  [carr.move :as mov]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [nightlight.repl-server]))

(def CARRIER (volatile! {:coord [0 0]
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
(def BSE-URL "http://localhost:4444/")
(def DIR-URL "http://localhost:4444/directives/")
(def DIR-TIO 1000)
(def CAR-TIO 1000)
(def CAM-TIO 4000)
(def HUD-TIO 831)
(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn error-handler [response]
  (let [{:keys [status status-text]} response]
  (println (str "AJAX ERROR: " status " " status-text))))

(defn directives-handler [response]
  (doseq [{:keys [directive] :as dir} (read-transit response)]
  ;;(println [:DIRECTIVE dir])
  (condp = directive
    :fly (let [{:keys [lat lon crs alt period]} dir]
            (czm/fly-to lat lon alt crs period))
    :carrier (vreset! CARRIER (merge @CARRIER dir))
    :camera (vreset! czm/CAMERA (merge @czm/CAMERA dir))
    :turn (let [{:keys [course]} dir]
              (mov/turn-and-bank CARRIER course))
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
       alt (:altitude car)]
    (czm/fly-to lat lon alt crs (/ CAM-TIO 1000))))

(defn on-load []
  (enable-console-print!)
(czm/init-3D-view BSE-URL :terrain)
(vswap! CARRIER assoc :step (double (/ CAR-TIO 3600000)))
(asp/repeater mov/move CARRIER CAR-TIO)
(asp/repeater ctl/show-flight-data CARRIER HUD-TIO)
(asp/repeater camera-move CARRIER CAM-TIO)
(asp/repeater receive-directives DIR-TIO)
(ctl/show-controls))

(defn onboard [call]
)

(defn view [dir]
  (czm/camera :view dir))

(defn pitch [deg]
  (if (<= -180 deg 180)
  (czm/camera :pitch deg)))

(defn roll [deg]
  (if (<= -180 deg 180)
  (czm/camera :roll deg)))

(defn course [crs]
  (if (<= 0 crs 360)
  (mov/turn-and-bank CARRIER crs)))

(defn speed [spd]
  (let [tmp (if (< (:speed @CARRIER) 150) 2 1)]
  (mov/accel CARRIER spd tmp)))

(defn altitude [alt]
  (let [tmp (if (< (:altitude @CARRIER) 1000) 1 3)]
  (mov/elevate CARRIER alt tmp)))


(set! (.-onload js/window) (on-load))
(vreset! CARRIER 
(merge @CARRIER {
:coord [60 30] :altitude 10000 :course 270 :speed 100
}))