(ns ext.data
(:use protege.core)
(:require 
  [wiki.gis :as wig]
  [cesium.core :as cz]
  [calc.geo :as geo]
  [async.proc :as asp]
  [geo.names :as gn]
  [fr24.client :refer [json-web-data]]))

(def TIO {:carrier 1000
 :camera 2222
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data 15000
 :ext-data-popup 60000})
(def WEATHER2-API "http://www.myweather2.com/developer/forecast.ashx?uac=Pyih5WakI3&output=json&query=")
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

(defn placemark-instruct [dati]
  {:instruct :create-placemark
 :iname (.getName dati)
 :lat (sv dati "lat")
 :lon (sv dati "lng")
 :feature (sv dati "feature")})

(defn placemark-popup-instruct [dati]
  (let [head (str "<h3>" (sv dati "title") "</h3>")
       itag (str "<img src=\"" (sv dati "thumbnailImg") "\">")
       summ (sv dati "summary")
       addr (str "http://" (sv dati "wikipediaUrl") "\"")
       wiki (str "<a href=\"" addr "\">" addr "</a>")
       html (str head itag "<br>" summ "<br>" wiki)]
  {:instruct :popup
    :lat (sv dati "lat")
    :lon (sv dati "lng")
    :html html
    :time (:ext-data-popup TIO)}))

(defn our-center [n s w e]
  [(/ (+ n s) 2) (/ (+ w e) 2)])

(defn our-radius [n s w e]
  (/ (* (- n s) 60) 2))

(defn point-out-place [dati edt]
  (let [[n s w e] (:visible edt)
       lat (sv dati "lat")
       lon (sv dati "lng")
       dis (geo/distance-nm (our-center n s w e) [lat lon])]
  (cz/point-out (sv dati "title") [lat lon] dis (our-radius n s w e))))

(defn pump-wiki [chn edata]
  (let [[n s w e] (:visible @edata)
       [lat lon] (our-center n s w e)
       [n0 s0 w0 e0] (:wiki-bbx @edata)]
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
             (with-timeout (:ext-data TIO)
	(wig/submit-bbx (itm rqi 0) rqi))
             (let [rr (svs rqi "responses")]
               (when (seq rr)
	(asp/pump-in chn {:instruct :clear-placemarks})
	(doseq [r rr]
	  (point-out-place r @edata)
	  (asp/pump-in chn (placemark-instruct r)))
	(vswap! edata assoc :wiki-bbx [n s w e]))))
           (println "Instance of \"Current BBXWiki Request\" not found!")))))))

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
  (let [w2 (json-web-data (str ext.data/WEATHER2-API lat "," lon))]
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

(defn pump-weather [chn edata fun]
  (let [[n s w e] (:visible @edata)
        [lat lon] (our-center n s w e)
        html (or (fun lat lon n s w e)
	"Weather information unavailable!")]
    (asp/pump-in chn 
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :time (:ext-data-popup TIO)})))

