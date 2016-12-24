(ns chart.client
(:require
  [goog.string :as gstring]
  [goog.string.format]
  [csasync.proc :as asp]
  [chart.controls :as ctl]
  [carr.move :as mov]
  [cognitect.transit :as t]
  [ajax.core :refer [GET]]
  [ask.master :as am]))

(def HOST "http://localhost:")
(def PORT 4444)
(def URL {:base (str HOST PORT "/")
 :chart (str HOST PORT "/chart/")
 :directives (str HOST PORT "/directives/")
 :instructions (str HOST PORT "/instructions/")
 :command (str HOST PORT "/command/")})
(def TIO {:carrier 1000
 :camera 4200
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831})
(def URL-ICO {"INTERSECT" 	(str HOST PORT "/img/redpln32.png")
 "DESCEND" 	(str HOST PORT "/img/greenpln32.png")
 "CLIMB" 	(str HOST PORT "/img/bluepln32.png")
 "LEVEL" 	(str HOST PORT "/img/purplepln32.png")
 "GROUND" 	(str HOST PORT "/img/greypln32.png")
 "COUNTER"	(str HOST PORT "/img/b.png")
 "FOLLOWING"	(str HOST PORT "/img/r.png")})
(def CHART (volatile! {}))
(def VEHICLES (volatile! {}))
(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn move-vehicle [id]
  (when-let [vmp (@VEHICLES id)]
  (mov/move vmp)
  (let [mp @vmp
         mrk (:marker mp)
         [lat lon] (:coord mp)
         pos (js/L.LatLng. lat lon)]
    (.setLatLng mrk pos))
  (vswap! VEHICLES assoc id vmp)))

(defn delete-vehicle [id]
  (when-let [veh (@VEHICLES id)]
  (asp/stop-process (:movst @veh))
  (.removeLayer @CHART (:marker @veh))
  (vswap! VEHICLES dissoc id)))

(defn clear-vehicles []
  (doseq [veh (vals @VEHICLES)]
  (asp/stop-process (:movst @veh))
  (.removeLayer @CHART (:marker @veh)))
(vreset! VEHICLES {}))

(defn error-handler [response]
  (let [{:keys [status status-text]} response]
  (println (str "AJAX ERROR: " status " " status-text))))

(defn info [id]
  (GET (str (:command URL) "info?id=" id)
  {:handler (fn [response])
   :error-handler error-handler}))

(defn create-update-marker [mrk mp]
  (if mrk
  (.removeLayer @CHART mrk))
(let [[lat lon] (:coord mp)
       pos (js/L.LatLng. lat lon)
       ico (js/L.icon #js{:iconUrl (URL-ICO (:status mp)) 
                                  :iconSize #js[32, 32]})
       opt #js{:icon ico 
                   :draggable true}
       mrk (-> js/L (.rotatedMarker pos opt))]
    (.on mrk "click"
         (fn [e]
           (info (ffirst (filter #(= (:marker @(second %)) (.-target e)) 
                                      (seq @VEHICLES))))))
    (.addTo mrk @CHART)
    (set! (.. mrk -options -angle) (:course mp))
    mrk))

(defn create-update-vehicle [id mp]
  (delete-vehicle id)
(let [ms (volatile! "START")
       mp (assoc mp :marker (create-update-marker nil mp)
                              :step-hrs (double (/ (:vehicles TIO) 3600000))
	      :movst ms
                              :mover (asp/start-process ms #(move-vehicle id) (:vehicles TIO)))
         carr (volatile! mp)]
    (mov/set-turn-point carr)
    (vswap! VEHICLES assoc id carr)))

(defn popup
  ([id html time]
  (let [vmp (@VEHICLES id)
         [lat lon] (:coord @vmp)]
    (popup lat lon html time)))
([lat lon html time]
  (let [pop (-> js/L (.popup {:maxWidth 600 :maxHeight 800 })
                (.setLatLng (array lat lon))
                (.setContent html))]
    (.addLayer @CHART pop)
    (if (> time 0)
        (asp/delayer #(.removeLayer @CHART pop)
                            time)))))

(defn add-trail [id points options time]
  (let [ops (clj->js options)
       pts (map #(js/L.LatLng. (first %) (second %)) (partition 3 points))
       pts (clj->js pts)
       trl (js/L.polyline pts ops)]
    (.addLayer @CHART trl)
    (if (> time 0)
        (asp/delayer #(.removeLayer @CHART trl)
                            time))))

(defn visible-map []
  (let [bnd (.getBounds @CHART)]
  [(.getNorth bnd)
   (.getSouth bnd)
   (.getWest bnd)
   (.getEast bnd)]))

(defn new-visible []
  (let [[n s w e] (visible-map)
        url (str (:command URL) "visible?n=" n "&s=" s "&w=" w "&e=" e)]
    (GET url {:handler (fn [response])
              :error-handler error-handler})))

(defn map-center [[lat lon]]
  (let [cen (js/L.LatLng. lat lon)
        zom (.getZoom @CHART)]
  (.setView @CHART cen zom {})
  (new-visible)))

(defn move-to [ins]
  (println [:MOVE-TO ins])
(let [cts (:countries ins)
       aps (:airports ins)]
  (cond
    cts (do (am/selector1 "chart.client" "countries" cts :itself 130)
            (defn handler1 [sel]
	(am/ask-server {:whom :direct
		  :question "airports"
		  :country sel} move-to)))
    aps (do (am/selector2 "chart.client" "airports" aps :itself 130)
            (defn handler2 [sel]
	(println [:AIRPORT sel]))))))

(defn instructions-handler [response]
  (doseq [{:keys [instruct] :as ins} (read-transit response)]
  ;;(println [:INSTRUCT ins])
  (condp = instruct
    :create-update (let [{:keys [id vehicle]} ins]
	(create-update-vehicle id vehicle))
    :delete (let [{:keys [id]} ins]
	(delete-vehicle id))
    :clear (clear-vehicles)
    :popup (let [{:keys [id lat lon html time]} ins]
	(cond
	  id (popup id html time)
	  (and lat lon) (popup lat lon html time)))
    :trail (let [{:keys [id points options time]} ins]
	(add-trail id points options time))
    :map-center (let [{:keys [coord]} ins]
	(map-center coord))
    :move-to (move-to ins)     
    (println (str "Unknown instruction: " [instruct ins])))))

(defn receive-instructions []
  (GET (:instructions URL) {:handler instructions-handler
                       :error-handler error-handler}))

(defn watch-visible []
  (let [bnd (.getBounds @CHART)]
  (str "watch-visible?n=" (.getNorth bnd)
                             "&s=" (.getSouth bnd)
                             "&w=" (.getWest bnd)
                             "&e=" (.getEast bnd))))

(defn command [cmd]
  (GET (str (:command URL)
  (condp = cmd
    "watch-visible" (watch-visible)
    cmd))
  {:handler (fn [response])
   :error-handler error-handler}))

(defn init-chart []
  (println :INIT-CHART)
(let [m (-> js/L
              (.map "map")
              (.setView (array 40.8, -74.0) 10)) ;; Frankfurt
        tile1 (-> js/L (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                   #js{:maxZoom 16
                                       :attribution "Ru, OpenStreetMap &copy;"}))
        tile2 (-> js/L (.tileLayer "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        tile3 (-> js/L (.tileLayer "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        tile4 (-> js/L (.tileLayer "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                                   #js{:maxZoom 20
                                       :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                       :attribution "Ru, Google &copy;"}))
        tile5 (-> js/L (.tileLayer "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
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
         (fn [e] (ctl/mouse-move (.. e -latlng -lat) (.. e -latlng -lng))))
  (vreset! CHART m)))

(defn on-load-chart []
  (enable-console-print!)
(init-chart)
(asp/repeater receive-instructions (:instructions TIO))
(ctl/show-chart-controls))

(defn follow [id]
  (GET (str (:command URL) "follow?id=" id)
  {:handler (fn [response])
   :error-handler error-handler}))

(defn stopfollow []
  (GET (str (:command URL) "stopfollow")
  {:handler (fn [response])
   :error-handler error-handler}))

(defn trail [id]
  (GET (str (:command URL) "trail?id=" id)
  {:handler (fn [response])
   :error-handler error-handler}))

