(ns ext.data
(:use protege.core)
(:require 
  [wiki.gis :as wig]
  [cesium.core :as cz]
  [calc.geo :as geo]
  [async.proc :as asp]
  [geo.names :as gn]
  [fr24.client :as fr24]
  [osm.data :as osm])
(:import
  edu.stanford.smi.protege.model.Instance))

(def TIO {:carrier 1000
 :camera 3030
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :new-czml-doc 4000
 :manual-data 6000
 :ext-data-popup 60000})
(def WEATHER2-API "http://www.myweather2.com/developer/forecast.ashx?uac=Pyih5WakI3&output=json&query=")
(def CONTINENT {"AF" "Africa"
  "AN" "Antarctica"
  "AS" "Asia"
  "EU" "Europe"
  "NA" "North America"
  "OC" "Oceania"
  "SA" "South America"})
(def defCOMM (defonce COMM
  (volatile! 
    {:visible [0 0 0 0]
     :wiki-bbx [0 0 0 0]
     :wiki false
     :ins-chn nil
     :fr24-bbx-ctrl :client})))
(def LAST-R )
(defmacro with-timeout [msec & body]
  `(let [f# (future (do ~@body))
         v# (gensym)
         result# (deref f# ~msec v#)]
    (if (= v# result#)
      (do
        (println :FUTURE-CANCELLING)
        (future-cancel f#)
        (println :FUTURE-CANCELLED)
        nil)
      result#)))

(defn placemark-instruct [parmap]
  (let [{:keys [instance airport feature]} parmap]
  {:instruct :create-placemark
    :iname (or (some-> instance .getName) (some-> airport (get "iata")))
    :tip (or (some-> instance (sv "title")) (some-> airport (get "name")))
    :lat (or (some-> instance (sv "lat")) (some-> airport (get "lat")))
    :lon (or (some-> instance (sv "lng")) (some-> airport (get "lon")))
    :feature (or (some-> instance (sv "feature")) (some-> feature))}))

(defn placemark-popup-instruct [dati]
  (let [head (str "<h3>" (sv dati "title") "</h3>")
       itag (str "<img src=\"" (sv dati "thumbnailImg") "\">")
       summ (sv dati "summary")
       addr (sv dati "wikipediaUrl")
       wiki (str "<a href=\"" addr "\">" addr "</a>")
       html (str head itag "<br>" summ "<br>" wiki)]
  {:instruct :popup
    :lat (sv dati "lat")
    :lon (sv dati "lng")
    :html html
    :time (:ext-data-popup TIO)}))

(defn our-center
  ([]
  (apply our-center (:visible @COMM)))
([n s w e]
  [(/ (+ n s) 2) (/ (+ w e) 2)]))

(defn our-radius [n s w e]
  (/ (* (- n s) 60) 2))

(defn point-out-place [parmap]
  (let [[n s w e] (:visible @COMM)
       {:keys [instance airport]} parmap
       lat (or (some-> instance (sv "lat")) (some-> airport (get "lat")))
       lon (or (some-> instance (sv "lng")) (some-> airport (get "lon")))
       nam (or (some-> instance (sv "title")) (some-> airport (get "name")))
       iata (some-> airport (get "iata"))
       txt (if airport (str nam " (" iata ")") nam)
       dis (geo/distance-nm (our-center n s w e) [lat lon])]
  (cz/point-out txt [lat lon] dis (our-radius n s w e))))

(defn decorate-instance [dati]
  (condp = (typ dati)
  "WikiArticle"	(invoke-later (do
	  (.setDirectType dati (cls "WikiArticleDetails"))
	  (ssv dati "max-rows" (int 50))
	  (ssv dati "radius" (float 1))
	  (ssv dati "poi-req-butt" 
	    (first (.getDefaultValues (slt "poi-req-butt"))))
	  (ssv dati "butt-show-pois" 
	    "Show on Map/ext.data/show-on-map")
	  (ssv dati "butt-del-pois" 
	    "Delete POIs/ext.data/delete-pois")
	  (ssv dati "butt-return" 
	    "Return to Flight/ext.data/ret-to-flight")
	  (let [frm (.show *prj* dati)]
	    (.setLocationRelativeTo frm nil)
	    (.setAlwaysOnTop frm true)
	    (.setVisible frm true))))
  false))

(defn placemark-info [id]
  (when-let [dati (.getInstance *kb* (.substring id 2))]
  (decorate-instance dati)
  (point-out-place {:instance dati})
  (asp/pump-in (:ins-chn @COMM) 
	(placemark-popup-instruct dati))))

(defn gn-weather-html [lat lon n s w e]
  (let [rsp (gn/call-geonames-weather lat lon)]
  (if (and rsp (not (empty? rsp)))
    (let [lat2 	(read-string (rsp "lat"))
            lon2 	(read-string (rsp "lng"))
            [lat3 lon3 loc] (if (and (> n lat2 s) (< w lon2 e))
		[lat2 lon2 (format "%.4f %.4f" lat2 lon2)]
		[lat lon
		 (str (geo/rough-distance [lat lon] [lat2 lon2])
		       " miles to " 
		       (gn/direction (gn/bearing lat lon lat2 lon2))
		       " from here")])
            name 	(rsp "stationName")
            wcd 	(rsp "weatherCondition")
            hym 	(rsp "hymidity")
            tmp 	(rsp "temperature")
            wind 	(rsp "windDirection")
            bwnd 	(if (some? wind)
	  (let [b (+ (read-string wind) 180)] (if (> b 360) (- b 360) b)))
            win 	(if (some? bwnd)
	  (gn/direction bwnd)
	  "n/a")
            wins 	(rsp "windSpeed")
            tim 	(rsp "observationTime")
            mess	(str name " Weather Station<br>"
	  "location: " loc "<br>"
	  "observation time: " tim "<br>"
	  "weather conditions: " wcd "<br>"
	  "temperature: " tmp " Celsius<br>"
	  "hymidity: " hym "<br>"
	  "wind: " win ", " wins " Knots")]
         (str "<h3>Weather by GeoNames</h3>" mess))))
nil)

(defn w2-weather-html [lat lon n s w e]
  (letfn [(wind [w]
	(let [e (first (w "wind"))]
	  (str "Wind: " (e "dir") ", " (e "speed") " " (e "wind_unit") "<br>")))
           (weather [w]
	(str "Weather: " (w "weather_text") "<br>" (wind w)))
           (day [w] (str "Date: " (w "date") "<br>" 
	         (weather (first (w "day")))
	         "Day max temp: " (w "day_max_temp") " " (w "temp_unit") "<br>"
	         "Night min temp: " (w "night_min_temp") " " (w "temp_unit") "<br>"))]
  (let [w2 (fr24/json-web-data (str ext.data/WEATHER2-API lat "," lon))]
    (if (and w2 (not (empty? w2)))
      (let [w (first ((w2 "weather") "curren_weather"))
              f ((w2 "weather") "forecast")
              d1 (first f)
              d2 (second f)]
         (str "<h3>Weather by WEATHER2</h3>"
                "<a href='http://www.myweather2.com'>www.myweather2.com</a><br><br>"
                "<h4>Current weather</h4>"
                "Temperature: " (w "temp") " " (w "temp_unit") "<br>"
                "Pressure: " (w "pressure") "<br>"
                "Humidity: " (w "humidity") "<br>"
                (weather w) "<br>"
                "<h4>Forcast</h4>"
                (day d1) "<br>"
                (day d2)))))))

(defn pump-wiki []
  (let [[n s w e] (:visible @COMM)
       [lat lon] (our-center n s w e)
       [n0 s0 w0 e0] (:wiki-bbx @COMM)]
  (if (or (> s0 lat)
           (< n0 lat)
           (< e0 lon)
           (> w0 lon))
     (invoke-later
       (let [bbi (foc "BBX" "title" "Current")
              rqi (fainst (cls-instances "BBXWiki") "Current BBXWiki Request")]
         (if (and bbi rqi)
           (do
             (ssvs bbi "wsen" (vec (map float [w s e n])))
             (ssv rqi "bbx" bbi)
             (ssvs rqi "responses" [])
             (wig/submit-bbx (itm rqi 0) rqi)
             (let [rr (svs rqi "responses")
                    chn (:ins-chn @COMM)]
               (when (seq rr)
	(asp/pump-in chn {:instruct :clear-placemarks})
	(doseq [r rr]
	  (point-out-place {:instance r})
	  (asp/pump-in chn (placemark-instruct {:instance r})))
	(vswap! COMM assoc :wiki-bbx [n s w e]))))
           (println "Instance of \"Current BBXWiki Request\" not found!")))))))

(defn pump-weather [fun]
  (let [[n s w e] (:visible @COMM)
        [lat lon] (our-center n s w e)
        html (or (fun lat lon n s w e)
	"Weather information unavailable!")]
    (asp/pump-in (:ins-chn @COMM) 
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :time (:ext-data-popup TIO)})))

(defn pump-nearest-airports [k]
  (let [ocr (our-center)
        nas (fr24/nearest-airports k ocr)
        dis (map #(geo/distance-nm ocr [(% "lat")(% "lon")]) nas)
        bea (map #(geo/bear-deg ocr [(% "lat")(% "lon")]) nas)
        html (str "<h3>Nearest Airports</h3>"
	(apply str (for [i (range k)]
	  (str (inc i) ". " (get (nth nas i) "name") ", "
		(get (nth nas i) "country") " ("
		(get (nth nas i) "iata") "), "
		(format "distance: %.1f" (nth dis i)) " NM, "
		"direction: " (int (nth bea i)) "<br>"))))
        chn (:ins-chn @COMM)]
  (asp/pump-in chn
	{:instruct :popup
	 :lat (first ocr)
	 :lon (second ocr)
	 :html html
	 :width 1200
	 :height 1000
	 :time (:ext-data-popup TIO)})
  (asp/pump-in chn {:instruct :clear-placemarks})
  (doseq [apt (take k nas)]
    (point-out-place {:airport apt})
    (asp/pump-in chn (placemark-instruct {:airport apt :feature "airport"})))))

(defn pump-where-we-are []
  (let [[lat lon] (our-center)
        ocn (gn/call-geonames-ocean lat lon)
        pro "<html><head><meta charset=\"UTF-8\"/></meta></head>"
        hdr "<h3>Where we are?</h3>"
        html (if (= ocn "Land")
	(let [nby (gn/call-geonames-nearby lat lon nil nil nil nil)
	       nam (nby "name")
	       cty (nby "countryName")
	       adm (nby "adminName1")
	       cnt (nby "continentCode")
	       lat1 (read-string (nby "lat"))
	       lon1 (read-string (nby "lng"))
                               dis (read-string (nby "distance"))
	       dir (gn/direction (gn/bearing lat1 lon1 lat lon))]
	   (str pro hdr "We are in " (format "%.0f" dis)
		" miles to " dir
		" from the " nam ",<br>"
		cty " (" adm "),<br>"  
		(CONTINENT cnt)))
                      (str pro hdr "We are above the " ocn))]
    (asp/pump-in (:ins-chn @COMM)
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :width 600
	 :height 800
	 :time (:ext-data-popup TIO)})))

(defn pois-instruct [pois]
  (if (instance? Instance pois)
  (let [ins {:instruct :create-placemark
	:iname (.getName pois)
	:tip (or (sv pois "name")
	            (if-let [ntn (sv (sv pois "typeName") "name")]
		ntn
		"unnamed"))
	:lat (sv pois "lat")
	:lon (sv pois "lng")}]
    (if-let [url (sv (sv pois "typeName") "url")]
      (assoc ins :url-ico url)
      (if-let [url (sv (sv pois "typeClass") "url")]
        (assoc ins :url-ico url)
        (assoc ins :feature "default-pois"))))
  (map pois-instruct pois)))

(defn map-view-ctrl [who]
  (condp = who
  :server (vswap! COMM assoc :fr24-bbx-ctrl who)
  :client (let [{:keys [n s w e z]} @fr24/BBX]
               (asp/pump-in (:ins-chn @COMM)
	{:instruct :map-center
	 :coord [(/ (+ n s) 2) (/ (+ e w) 2)]
	 :zoom z})
               (vswap! COMM assoc :fr24-bbx-ctrl who))))

(defn show-on-map [hm inst]
  (let [mp (into {} hm)
       lat (mp "lat")
       lon (mp "lng")
       zoo 15
       chn (:ins-chn @COMM)
       rss (mp "osm-responses")]
  (map-view-ctrl :server)
  (asp/pump-in chn
	{:instruct :map-center
	 :coord [lat lon]
	 :zoom zoo
	 :lock true})
  (doseq [rs rss]
    (asp/pump-in chn (pois-instruct rs)))))

(defn delete-pois [hm inst]
  (let [mp (into {} hm)
       rss (mp "osm-responses")]
  (invoke-later
    (doseq [rs rss]
      (asp/pump-in (:ins-chn @COMM)
	{:instruct :delete-placemark
	 :iname (.getName rs)})
      (delin rs)))))

(defn ret-to-flight [hm inst]
  (let [{:keys [n s w e z]} @fr24/BBX]
  (map-view-ctrl :client)
  (asp/pump-in (:ins-chn @COMM)
	{:instruct :map-center
	 :coord [(/ (+ n s) 2) (/ (+ w e) 2)]
	 :zoom z})))

(defn pump-nearest [ob]
  (if-let [flt (seq (filter #(= (sv % "title") ob) (cls-instances "Feature")))]
  (let [[lat1 lon1] (our-center)
         nbr (gn/call-geonames-nearby lat1 lon1 nil (sv (first flt) "code") nil 300)
         html (if (or (nil? nbr) (empty? nbr))
	"No information."
	(let [lat2 (read-string (nbr "lat"))
	       lon2 (read-string (nbr "lng"))
	       dis (read-string (nbr "distance"))
	       bea (gn/bearing lat1 lon1 lat2 lon2)]
	  (str "<h3>Nearest " ob "</h3>"
	    "<h4>" (nbr "name") "</h4>"
	    "country: " (nbr "countryName") "<br>"
	    "latitude: " lat2 "<br>"
	    "longitude: " lon2 "<br>"
	    (format "distance: %.1f" dis) " NM<br>"
	    "direction: " (gn/direction bea))))]
    (asp/pump-in (:ins-chn @COMM)
	{:instruct :popup
	 :lat lat1
	 :lon lon1
	 :html html
	 :width 1200
	 :height 1000
	 :time (:ext-data-popup TIO)}))))

(defn pump-airplanes [head css]
  (let [[lat lon] (our-center)
       css (sort css)
       k (count css)
       cs3 (partition-all 3 css)
       html (str "<h3>" head "</h3>"
	"<h3>" k "</h3><table>"
	(apply str (map #(str "<tr><td>" (apply str (interpose "</td><td>" %)) "</td></tr>") cs3))
	"</table>")]
  (asp/pump-in (:ins-chn @COMM)
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :width 1200
	 :height 1000
	 :time (:ext-data-popup TIO)})))

(defn pump-far-airport [cnt apt]
  (if-let [apt (get-in (fr24/airports-by-country) [cnt apt])]
  (let [[lat1 lon1] (our-center)
         lat2 (apt "lat") 
         lon2 (apt "lon")
         dis (geo/distance-nm [lat1 lon1] [lat2 lon2])
         bea (geo/bear-deg [lat1 lon1] [lat2 lon2])
         html (str "<h3>" (apt "name") "</h3>"
	"country: " cnt "<br>"
	"latitude: " lat2 "<br>"
	"longitude: " lon2 "<br>"
	"direction: " (gn/direction bea)
	"<h4>" (format "distance: %.1f" dis) " NM</h4>")]
    (asp/pump-in (:ins-chn @COMM)
	{:instruct :popup
	 :lat lat1
	 :lon lon1
	 :html html
	 :width 1200
	 :height 1000
	 :time (:ext-data-popup TIO)}))))

(defn country-cities [cnt]
  (if-let [ins (fifos "Country" "title" cnt)]
  (let [cod (sv ins "code")
         gns (gn/call-geonames-search 
	{:country cod  :cities "cities1000" :orderby "population"})]
    (def LAST-R gns)
    (sort (map #(% "name") gns)))))

(defn local-cities []
  (let [[lat lon] (our-center)
       gns (gn/call-geonames-search 
	{:east (+ lon 1.0)	;; + 1 degree (~ 60 NM)
	 :west (- lon 1.0)
	 :north (+ lat 1.0)
	 :south (- lat 1.0)	;; square (120x120 MN)
	 :cities "cities1000" 
	 :orderby "population"})]
  (def LAST-R gns)
  (sort (map #(% "name") gns))))

(defn pump-far-city [cnt cty]
  (if-let [flt (seq (filter #(= (% "name") cty) LAST-R))]
  (let [ct (first flt)
         [lat1 lon1] (our-center)
         lat2 (read-string (ct "lat"))
         lon2 (read-string (ct "lng"))
         dis (geo/distance-nm [lat1 lon1] [lat2 lon2])
         bea (geo/bear-deg [lat1 lon1] [lat2 lon2])
         html (str "<h3>" cty "</h3>"
	"country: " cnt "<br>"
	"latitude: " lat2 "<br>"
	"longitude: " lon2 "<br>"
	"direction: " (gn/direction bea)
	"<h4>" (format "distance: %.1f" dis) " NM</h4>")]
    (asp/pump-in (:ins-chn @COMM)
	{:instruct :popup
	 :lat lat1
	 :lon lon1
	 :html html
	 :width 1200
	 :height 1000
	 :time (:ext-data-popup TIO)}))))

