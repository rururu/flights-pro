(ns view3d.client
(:require
  [csasync.proc :as asp]
  [czm.core :as czm]
  [carr.move :as mov]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [nightlight.repl-server]))

(def CARRIER (volatile! {:coord [0 0]
               :altitude 0
               :speed 0
               :course 0
               :step 0
               :rudder {:target 0
                            :status (volatile! nil)
                            :step 4}
               :engine {:target 0
                            :status (volatile! nil)
                            :step 0.25}}))
(def BSE-URL "http://localhost:4444/")
(def DIR-URL "http://localhost:4444/directives/")
(def DIR-TIO 1000)
(def CAR-TIO 1000)
(def CAM-TIO 4000)
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
    :turn (let [{:keys [course]} dir]
              (mov/turn CARRIER course))
    :accel (let [{:keys [speed]} dir]
              (mov/accel CARRIER speed))
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
  (czm/init-3D-view BSE-URL :terrain)
(vswap! CARRIER assoc :step (double (/ CAR-TIO 3600000)))
(asp/repeater mov/move CARRIER CAR-TIO)
(asp/repeater camera-move CARRIER CAM-TIO)
(asp/repeater receive-directives DIR-TIO))

