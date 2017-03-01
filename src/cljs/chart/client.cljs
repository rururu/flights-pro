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
 :command (str HOST PORT "/command/")
 :question (str HOST PORT "/question/")
 :answer (str HOST PORT "/answer/")
 :manual-data (str HOST PORT "/manual-data/")})
(def TIO {:carrier 1000
 :camera 2222
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data 15000
 :ext-data-popup 60000})
(def URL-ICO {"INTERSECT" 	(str HOST PORT "/img/redpln32.png")
 "DESCEND" 	(str HOST PORT "/img/greenpln32.png")
 "CLIMB" 	(str HOST PORT "/img/bluepln32.png")
 "LEVEL" 	(str HOST PORT "/img/purplepln32.png")
 "GROUND" 	(str HOST PORT "/img/greypln32.png")
 "COUNTER"	(str HOST PORT "/img/b.png")
 "FOLLOWING"	(str HOST PORT "/img/r.png")
 "default"	(str HOST PORT "/img/info.png")
 "landmark"	(str HOST PORT "/img/landmark.png")
 "edu"	(str HOST PORT "/img/edu.png")
 "mountain"	(str HOST PORT "/img/mountain.png")
 "river"	(str HOST PORT "/img/river.png")
 "railwaystation" (str HOST PORT "/img/railwaystation.png")
 "event"	(str HOST PORT "/img/event.png")
 "waterbody"	(str HOST PORT "/img/waterbody.png")
 "isle"	(str HOST PORT "/img/isle.png")
 "airport"	(str HOST PORT "/img/airport.png")
 "city"	(str HOST PORT "/img/city.png")})
(def CHART (volatile! {}))
(def VEHICLES (volatile! {}))
(def PLACEMARKS (volatile! {}))
(def LINKS (volatile! {}))
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(def no-handler {:handler (fn [response])
 :error-handler error-handler})
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
                    :rotationAngle (:course mp)
                    :rotationOrigin "center center"
                    :title (:callsign mp)
                    :draggable false}
       mrk (-> js/L (.marker pos opt))]
    (.on mrk "click"
         (fn [e]
           (info (ffirst (filter #(= (:marker @(second %)) (.-target e)) 
                                      (seq @VEHICLES))))))
    (.addTo mrk @CHART)
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

(defn create-placemark [iname tip lat lon feature]
  (let [pos (js/L.LatLng. lat lon)
       ico (js/L.icon #js{:iconUrl (or (URL-ICO feature) 
		     (URL-ICO "default"))
	           :iconSize #js[24, 24]})
       opt #js{:icon ico
                     :draggable false
                     :title tip}
       mrk (-> js/L (.rotatedMarker pos opt))]
    (.on mrk "click"
         (fn [e]
           (info (str "pm" iname))))
    (.addTo mrk @CHART)
    (vswap! PLACEMARKS assoc iname mrk)))

(defn clear-placemarks []
  (doseq [mrk (vals @PLACEMARKS)]
  (.removeLayer @CHART mrk))
(vreset! PLACEMARKS {}))

(defn popup
  ([id html time]
  (let [vmp (@VEHICLES id)
         [lat lon] (:coord @vmp)]
    (popup lat lon html time)))
([lat lon html time]
  (popup lat lon html time 240 480))
([lat lon html time w h]
  (let [pop (-> js/L (.popup #js{:maxWidth w :maxHeight h})
                (.setLatLng (array lat lon))
                (.setContent html))]
    (.addLayer @CHART pop)
    (if (> time 0)
        (asp/delayer #(.removeLayer @CHART pop) time)))))

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

(defn collect-llga [ids]
  (let [vhs (filter some? (map #(@VEHICLES %) ids))
       mks (map #(:marker @%) vhs)
       llgs (map #(.getLatLng %) mks)]
  (clj->js llgs)))

(defn linkPopup [[id1 id2] ops]
  (let [vhs @VEHICLES
       alt1 (:altitude @(vhs id1))
       alt2 (:altitude @(vhs id2))
       adif (- alt1 alt2)
       titl (:title ops)
       dmin (:dmin ops )
       tmin (:tmin ops)]
  (str "<h3>" titl "</h3>"
       "<table>"
       "<tr><td>Dmin</td><td>" (if (number? dmin) (int (* 1852 dmin))) " m</td></tr>"
       "<tr><td>Tmin</td><td>" (if (number? tmin) (int (* 60 tmin))) " min</td></tr>"
       "<tr><td>Alt-diff</td><td>" adif " ft</td></tr>"
       "</table>")))

(defn add-link [ids options]
  (let [ops (clj->js options)
       tmin (:tmin options)
       del (if (number? tmin)
               (int (* 60000 tmin))
               30000)
       llg (collect-llga ids)
       lnk (js/L.polyline llg ops)]
  (.addLayer @CHART lnk)
  (.bindPopup lnk (linkPopup ids options))
  (vswap! LINKS assoc ids lnk)
  (if (> del 0)
    (asp/delayer #(do (.removeLayer @CHART lnk)
	     (vswap! LINKS dissoc ids)) del))))

(defn instructions-handler [response]
  (doseq [{:keys [instruct] :as ins} (read-transit response)]
  ;;(println [:INSTRUCT ins])
  (condp = instruct
    :create-update (let [{:keys [id vehicle]} ins]
	(create-update-vehicle id vehicle))
    :delete (let [{:keys [id]} ins]
	(delete-vehicle id))
    :clear (clear-vehicles)
    :popup (let [{:keys [id lat lon html time width height]} ins]
	(cond
	  id (popup id html time)
	  (and  width height lat lon) (popup lat lon html time width height)
	  (and lat lon) (popup lat lon html time)))
    :trail (let [{:keys [id points options time]} ins]
	(add-trail id points options time))
    :map-center (let [{:keys [coord]} ins]
	(map-center coord))
    :create-placemark (let [{:keys [iname tip lat lon feature]} ins]
                      (create-placemark iname tip lat lon feature))
    :clear-placemarks (clear-placemarks)
    :add-link (let [{:keys [ids options]} ins]
                  (add-link ids options))
    (println (str "Unknown instruction: " [instruct ins])))))

(defn receive-instructions []
  (GET (:instructions URL) {:handler instructions-handler
                       :error-handler error-handler}))

(defn move-to
  ([]
  (am/ask-server {:whom "direct"
	    :question "countries"})
  (am/get-answer move-to))
([cns]
  (am/selector1 "chart.client" "countries" cns :itself 130)
  (defn handler1 [sel]
    (am/ask-server {:whom "direct"
	       :question "airports"
	       :country sel})
    (am/get-answer #(move-to sel %))))
([cnt aps]
  (am/selector2 "chart.client" "airports" aps :itself 130)
  (defn handler2 [sel]
    (let [prm (str "?country=" cnt
	"&airport=" sel)]
      (GET (str (:command URL) "move-to" prm) no-handler)
      (am/clear-dialog)))))

(defn schedule
  ([]
  (am/input1 "chart.client" "new callsign" 80)
  (defn handler1 [call]
    (am/input2 "chart.client" "hh:mm" 80)
      (defn handler2 [tim]
        (schedule call tim))))
([call tim]
  (am/ask-server {:whom "direct"
	    :question "countries"})
  (am/get-answer #(schedule call tim %)))
([call tim cns1]
  (am/selector3 "chart.client" "from country" cns1 :itself 130)
  (defn handler3 [sel]
    (am/ask-server {:whom "direct"
	       :question "airports"
	       :country sel})
    (am/get-answer #(schedule call tim sel %))))
([call tim cnt1 aps1]
  (am/selector4 "chart.client" "from airport" aps1 :itself 130)
  (defn handler4 [sel]
    (am/ask-server {:whom "direct"
	    :question "countries"})
    (am/get-answer #(schedule call tim cnt1 sel %))))
([call tim cnt1 apt1 cns2]
  (am/selector5 "chart.client" "to county" cns2 :itself 130)
  (defn handler5 [sel]
    (am/ask-server {:whom "direct"
	       :question "airports"
	       :country sel})
    (am/get-answer #(schedule call tim cnt1 apt1 sel %))))
([call tim cnt1 apt1 cnt2 aps2]
  (am/selector6 "chart.client" "to airport" aps2 :itself 130)
  (defn handler6 [sel]
    (let [prm (str "?callsign=" call
	"&time=" tim
	"&country1=" cnt1
	"&airport1=" apt1
	"&country2=" cnt2
	"&airport2=" sel)]
      (GET (str (:command URL) "schedule" prm) no-handler)
      (am/clear-dialog)))))

(defn command [cmd]
  (condp = cmd
  "commands" nil
  "watch-visible" (let [bnd (.getBounds @CHART)
	          prm (str "?n=" (.getNorth bnd)
		"&s=" (.getSouth bnd)
		"&w=" (.getWest bnd)
		"&e=" (.getEast bnd))]
	       (GET (str (:command URL) cmd prm) no-handler))
  "move-to" (move-to)
  "schedule" (schedule)
  (GET (str (:command URL) cmd) no-handler)))

(defn init-chart []
  (println :INIT-CHART)
(let [m (-> js/L
              (.map "map")
              (.setView (array 60.3, 25.0) 10)) ;; New York 40.8, -74.0
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
    (try
      (.addTo tile1 m)
      (catch js/Error e (println e)))
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

(defn question [q]
  (condp = q
  "questions" nil
  (am/ask-server {:whom "es" :predicate q})))


(set! (.-onload js/window) (on-load-chart))