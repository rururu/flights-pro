(ns view3d.core
(:require
   [goog.string :as gstring]
   [goog.string.format]))

(def BSE-URL "http://localhost:4444/")
(def TERR-PROV (js/Cesium.CesiumTerrainProvider.
  #js{:url "//assets.agi.com/stk-terrain/world"
        :requestWaterMask false
        :requestVertexNormals false}))
(def VIEWER (js/Cesium.Viewer. 
  "cesiumContainer" 
  #js{:animation false}))
(def CZM-SRC (js/Cesium.CzmlDataSource.))
(def EVT-SRC (js/EventSource. (str BSE-URL "czml/")))
(def CAMERA (volatile! {:view "FORWARD"
                        :pitch 0
                        :roll 0
                        :altitude 2}))
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
        head (norm-crs (condp = (:view @CAMERA)
                         "ASTERN" (+ crs 180)
                         "STARBOARD" (+ crs 90)
                         "PORT" (- crs 90)
                         "STAR-BOW" (+ crs 45)
                         "PORT-BOW" (- crs 45)
                         "STAR-ABAFT" (+ crs 135)
                         "PORT-ABAFT" (- crs 135)
                         crs))]
    (fly-control lat lon alt head pitch roll per)))

(defn camera [key val]
  (vswap! CAMERA key val))

(defn init-3D-view []
  (enable-console-print!)
(set! (.-terrainProvider VIEWER) TERR-PROV)
(.add (.-dataSources VIEWER) CZM-SRC)
(.addEventListener EVT-SRC "czml" cz-processor false)
(println [:INIT-3D-VIEW :DONE]))


(set! (.-onload js/window) (init-3D-view))