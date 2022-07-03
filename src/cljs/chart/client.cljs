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
 :camera 3030
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data-popup 60000})
(def URL-ICO {"INTERSECT" 	(str HOST PORT "/img/redpln32.png")
 "DESCEND" 	(str HOST PORT "/img/greenpln32.png")
 "CLIMB" 	(str HOST PORT "/img/bluepln32.png")
 "LEVEL" 	(str HOST PORT "/img/purplepln32.png")
 "GROUND" 	(str HOST PORT "/img/greypln32.png")
 "COUNTER"	(str HOST PORT "/img/r.png")
 "FOLLOWING"	(str HOST PORT "/img/b.png")
 "default"	(str HOST PORT "/img/info.png")
 "default-pois"	(str HOST PORT "/img/place3.jpeg")
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
(def ONBOARD "MANUAL")
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
                              :mover (asp/start-process ms #(move-vehicle id) (:vehicles TIO) nil))
         carr (volatile! mp)]
    (mov/set-turn-point carr)
    (vswap! VEHICLES assoc id carr)))

(defn create-placemark [iname tip lat lon feature url-ico]
  (let [pos (js/L.LatLng. lat lon)
       ico (js/L.icon #js{:iconUrl (or url-ico
		     (URL-ICO feature) 
		     (URL-ICO "default"))
	           :iconSize #js[24, 24]})
       opt #js{:icon ico
                    :draggable false
                    :title tip}
       mrk (-> js/L (.marker pos opt))]
    (.on mrk "click"
         (fn [e]
           (info (str "pm" iname))))
    (.addTo mrk @CHART)
    (vswap! PLACEMARKS assoc iname mrk)))

(defn delete-placemark [iname]
  (when-let [mrk (@PLACEMARKS iname)]
  (.removeLayer @CHART mrk)
  (vswap! PLACEMARKS dissoc iname)))

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
        z (.getZoom @CHART)
        url (str (:command URL) "visible?z=" z
		"&n=" n 
		"&s=" s 
		"&w=" w 
		"&e=" e)]
    (GET url {:handler (fn [response])
              :error-handler error-handler})))

(defn map-center [[lat lon] zoom lock]
  (let [cen (js/L.LatLng. lat lon)
        zom (or zoom (.getZoom @CHART))]
  (.setView @CHART cen zom {})
  (if (not lock)
    (new-visible))))

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

(defn select-airport
  ([]
  (am/ask-server {:question "countries"}
	select-airport))
([cns]
  (am/selector "element" 1 "chart.client" "countries" cns :itself 130)
  (defn handler1 [sel]
    (am/ask-server {:question "airports"
	       :country sel}
	#(select-airport sel %))))
([cnt aps]
  (am/selector "element" 20 "chart.client" "airports" aps :itself 130)
  (defn handler20 [sel]
    (am/ask-server {:question "es"
	      :predicate "User Answer"
	      :subject "selected airport"
	      :object sel
                              :adjunct cnt} 
	(fn [r]))
    (am/clear-dialog))))

(defn select-city [param]
  (if-let [cns (:countries param)]
  (do (am/selector "element" 1 "chart.client" "countries" cns :itself 130)
        (defn handler1 [sel]
          (am/ask-server {:question "es"
	:predicate "User Answer"
	:subject "selected country"
	:object sel} 
	(fn [r]))))
  (if-let [cts (:cities param)]
    (do (am/selector "element" 20 "chart.client" "cities" cts :itself 130)
      (defn handler20 [sel]
        (am/ask-server {:question "es"
	:predicate "User Answer"
	:subject "selected city"
	:object sel} 
	(fn [r]))
        (am/clear-dialog))))))

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
    :map-center (let [{:keys [coord zoom lock]} ins]
	(map-center coord zoom lock))
    :create-placemark (let [{:keys [iname tip lat lon feature url-ico]} ins]
	(create-placemark iname tip lat lon feature url-ico))
    :delete-placemark (let [{:keys [iname]} ins]
	(delete-placemark iname))
    :clear-placemarks (clear-placemarks)
    :add-link (let [{:keys [ids options]} ins]
	(add-link ids options))
    :ask-user (let [{:keys [question param]} ins]
	(condp = question
	  "city" (select-city param)
	  "airport" (select-airport)))
    :onboard (let [{:keys [callsign]} ins]
	(def ONBOARD callsign))
    (println (str "Unknown instruction: " [instruct ins])))))

(defn receive-instructions []
  (GET (:instructions URL) {:handler instructions-handler
                       :error-handler error-handler}))

(defn move-to
  ([]
  (am/ask-server {:question "countries"}
	move-to))
([cns]
  (am/selector "element" 1 "chart.client" "countries" cns :itself 130)
  (defn handler1 [sel]
    (am/ask-server {:question "airports"
	       :country sel}
	#(move-to sel %))))
([cnt aps]
  (am/selector "element" 2 "chart.client" "airports" aps :itself 130)
  (defn handler2 [sel]
    (let [prm (str "?country=" cnt
	"&airport=" sel)]
      (GET (str (:command URL) "move-to" prm) no-handler)
      (am/clear-dialog)))))

(defn schedule
  ([]
  (am/input "element" 1 "chart.client" "new callsign" 80)
  (defn handler1 [call]
    (am/input "element" 2 "chart.client" "hh:mm" 80)
      (defn handler2 [tim]
        (schedule call tim))))
([call tim]
  (am/ask-server {:question "countries"}
	#(schedule call tim %)))
([call tim cns1]
  (am/selector "element" 3 "chart.client" "from country" cns1 :itself 130)
  (defn handler3 [sel]
    (am/ask-server {:question "airports"
	       :country sel}
	#(schedule call tim sel %))))
([call tim cnt1 aps1]
  (am/selector "element" 4 "chart.client" "from airport" aps1 :itself 130)
  (defn handler4 [sel]
    (am/ask-server {:question "countries"}
	#(schedule call tim cnt1 sel %))))
([call tim cnt1 apt1 cns2]
  (am/selector "element" 5 "chart.client" "to county" cns2 :itself 130)
  (defn handler5 [sel]
    (am/ask-server {:question "airports"
	       :country sel}
	#(schedule call tim cnt1 apt1 sel %))))
([call tim cnt1 apt1 cnt2 aps2]
  (am/selector "element" 6 "chart.client" "to airport" aps2 :itself 130)
  (defn handler6 [sel]
    (let [prm (str "?callsign=" call
	"&time=" tim
	"&country1=" cnt1
	"&airport1=" apt1
	"&country2=" cnt2
	"&airport2=" sel)]
      (GET (str (:command URL) "schedule" prm) no-handler)
      (am/clear-dialog)))))

(defn question
  ([]
  (am/ask-server {:question "predicates"}
	question))
([predicates]
  (am/selector "element" 1 "chart.client" "?" predicates :itself 130)
  (defn handler1 [sel]
    (am/ask-server {:question "subjects"
	       :predicate sel}
	#(question sel %))))
([pred subjects]
  (am/selector "element" 20 "chart.client" "?" subjects :itself 130)
  (defn handler20 [sel]
    (am/ask-server {:question "objects"
	       :predicate pred
	       :subject sel}
	#(question pred sel %))))
([pred subj objects]
  (if objects
    (do (am/selector "element" 30 "chart.client" "?" objects :itself 130)
      (defn handler30 [sel]
        (am/ask-server {:question "adjuncts"
	          :predicate pred
	          :subject subj
	          :object sel} 
	#(question pred subj sel %))))
    (am/clear-dialog)))
([pred subj obj adjuncts]
  (if adjuncts
    (do (am/selector "element" 40 "chart.client" "?" adjuncts :itself 130)
      (defn handler40 [sel]
        (am/ask-server {:question "es"
	          :predicate pred
	          :subject subj
	          :object obj
                                  :adjunct sel} 
	(fn [r]))
        (am/clear-dialog)))
    (am/clear-dialog))))

(defn command [cmd]
  (condp = cmd
  "commands" nil
  "watch-visible" (let [bnd (.getBounds @CHART)
	          prm (str "?n=" (.getNorth bnd)
		"&s=" (.getSouth bnd)
		"&w=" (.getWest bnd)
		"&e=" (.getEast bnd)
		"&z=" (.getZoom @CHART))]
	       (GET (str (:command URL) cmd prm) no-handler))
  "move-to" (move-to)
  "schedule" (schedule)
  "question" (question)
  (GET (str (:command URL) cmd) no-handler))
(ctl/show-chart-controls))

(defn mouse-click [lat lng]
  (let [htm (if (= ONBOARD "MANUAL")
                (str "MANUAL instantly goes to this location?<br><br>"
	"<input type='button' 
	 value='Go!'
	 style='color:blue;display:block;margin:auto;'
	 onclick='chart.client.mangoinst(" lat "," lng ")' >")
                (str "Now on board " ONBOARD))]
  (popup lat lng htm 8000 240 100)))

(defn init-chart []
  (println :INIT-CHART)
(let [m (-> js/L
              (.map "map")
              (.setView (array 60.3, 25.0) 10)) ;; New York 40.8, -74.0
        tile1 (-> js/L (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                   #js{:maxZoom 20
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
    (.on m "zoomend"
      (fn [e] (ctl/display-zoom (.getZoom m))))
    (.on m "click"
      (fn [e] (mouse-click (.. e -latlng -lat) (.. e -latlng -lng))))
    (ctl/display-zoom (.getZoom m))
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

(defn mangoinst [lat lon]
  (GET (str (:command URL) "goto?lat=" lat "&lon=" lon "&from=CHART")))


(set! (.-onload js/window) (on-load-chart))