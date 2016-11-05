(ns chart.client
(:require
  [goog.string :as gstring]
  [goog.string.format]
  [csasync.proc :as asp]
  [carr.move :as mov]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]))

(def PORT 4444)
(def CHR-URL (str "http://localhost:" PORT "/chart/"))
(def CHART (volatile! {}))
(def VEHICLES (volatile! {}))
(def MOV-TIO 200)
(def URL-ICO {"INTERSECT" 	(str "http://localhost:" PORT "/img/redpln32.png")
 "DESCEND" 	(str "http://localhost:" PORT "/img/greenpln32.png")
 "CLIMB" 	(str "http://localhost:" PORT "/img/bluepln32.png")
 "LEVEL" 	(str "http://localhost:" PORT "/img/purplepln32.png")
 "GROUND" 	(str "http://localhost:" PORT "/img/greypln32.png")})
(def URL-OSM "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
(def URL-GSA "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}")
(def URL-GST "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}")
(def URL-GHB "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}")
(def URL-GTR "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}")
(defn by-id  [id]
  (.getElementById js/document id))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn format [fmt & args]
  (apply gstring/format fmt args))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn mouse-move [lat lng]
  (set-html! "mousepos" (str "lat " (format "%.4f" lat) " lon " (format "%.4f" lng))))

(defn error-handler [response]
  (let [{:keys [status status-text]} response]
  (println (str "AJAX ERROR: " status " " status-text))))

(defn move-vehicle [mp]
  (mov/move mp)
(let [mrk (:marker mp)
         [lat lon] (:coord mp)
         pos (js/L.LatLng. lat lon)]
    (.setLatLng mrk pos)))

(defn delete-vehicle [id]
  (when-let [veh (@VEHICLES id)]
  (asp/close-chan (:mover veh))
  (.removeLayer @CHART (:marker veh))
  (vswap! VEHICLES dissoc id)))

(defn info [id]
  id)

(defn create-marker [mp]
  (let [[lat lon] (:coord mp)
       pos (js/L.LatLng. lat lon)
       ico (js/L.icon #js{:iconUrl (URL-ICO (:status mp)) 
                                  :iconSize #js[32, 32]})
       opt #js{:icon ico 
                   :draggable true}
       mk (-> js/L (.rotatedMarker pos opt))]
    (.on mk "click"
         (fn [e]
           (info (ffirst (filter #(= (:marker (second %)) (.-target e)) (seq @VEHICLES))))))
    mk))

(defn create-vehicle [id mp]
  (if (@VEHICLES id)
  (delete-vehicle id))
(let [mrk (create-marker mp)]
  (vswap! VEHICLES assoc-in [id :marker] mrk)
  (.addTo mrk @CHART)
  (set! (.. mrk -options -angle) (:course mp))
  (vswap! VEHICLES assoc-in [id :mover]
           (asp/repeater move-vehicle mp MOV-TIO))))

(defn init-chart []
  (println :INIT-CHART)
(let [m (-> js/L
              (.map "map")
              (.setView (array 60.0, 30.0) 10)) ;; SPb
        tile1 (-> js/L (.tileLayer URL-OSM
                                   #js{:maxZoom 16
                                       :attribution "Ru, OpenStreetMap &copy;"}))
        tile2 (-> js/L (.tileLayer URL-GSA
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        tile3 (-> js/L (.tileLayer URL-GST
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        tile4 (-> js/L (.tileLayer URL-GHB
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        tile5 (-> js/L (.tileLayer URL-GTR
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        base (clj->js {"OpenStreetMap" tile1
                       "Google Satellite" tile2
                       "Google Streets" tile3
                       "Google Hybrid" tile4
                       "Google Terrain" tile5})
        ctrl (-> js/L (.control.layers base nil))]
  (.addTo tile1 m)
  (.addTo ctrl m)
  (.on m "mousemove"
         (fn [e] (mouse-move (.. e -latlng -lat) (.. e -latlng -lng))))
  (vreset! CHART m)))

(defn on-load-chart []
  (enable-console-print!)
(init-chart))


(set! (.-onload js/window) (on-load-chart))