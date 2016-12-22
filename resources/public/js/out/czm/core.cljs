(ns czm.core
(:require
  [calc.dynamic :as dyn]
  [calc.geo :as geo]))

(def TERR-PROV (js/Cesium.CesiumTerrainProvider.
  #js{:url "//assets.agi.com/stk-terrain/world"
        :requestWaterMask false
        :requestVertexNormals false}))
(def VIEWER (js/Cesium.Viewer. 
  "cesiumContainer" 
  #js{:animation false}))
(def CZM-SRC (js/Cesium.CzmlDataSource.))
(def CAMERA (volatile! {:view "FORWARD"
                        :pitch -20
                        :roll 0}))
(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

(defn cz-processor [e]
  (let [data (.-data e)
       data (js/JSON.parse data)]
  (.process CZM-SRC data)))

(defn fly-control [lat lon alt hea pit rol per]
  (let [dest (js/Cesium.Cartesian3.fromDegrees lon lat alt)]
  (.flyTo (.-camera VIEWER)
            #js{:destination dest
                  :orientation #js{:heading (js/Cesium.Math.toRadians hea)
                                           :pitch   (js/Cesium.Math.toRadians pit)
                                           :roll    (js/Cesium.Math.toRadians rol)}
                  :duration per
                  :easingFunction (fn [time] time)})))

(defn fly-to [lat lon alt crs per]
  (let [pitch (condp = (:view @CAMERA)
                "UP" 90
                "DOWN" -90
                (:pitch @CAMERA))
        roll (:roll @CAMERA)
        head (geo/norm-crs (condp = (:view @CAMERA)
                         "BACKWARD" (+ crs 180)
                         "RIGHT" (+ crs 90)
                         "LEFT" (- crs 90)
                         "FORWARD-RIGHT" (+ crs 45)
                         "FORWARD-LEFT" (- crs 45)
                         "BACKWARD-RIGHT" (+ crs 135)
                         "BACKWARD-LEFT" (- crs 135)
                         crs))]
    (fly-control lat lon alt head pitch roll per)))

(defn camera [key val]
  (vswap! CAMERA assoc key val))

(defn init-3D-view [base-url terra]
  (if (= terra "yes")
  (set! (.-terrainProvider VIEWER) TERR-PROV))
(.add (.-dataSources VIEWER) CZM-SRC)
(.addEventListener (js/EventSource. (str base-url "czml/")) "czml" cz-processor false)
(println [:INIT-3D-VIEW :BASE base-url :TERRA terra]))

