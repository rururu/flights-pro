(ns ext.data
(:use protege.core)
(:require 
  [wiki.gis :as wig]
  [cesium.core :as cz]
  [calc.geo :as geo]
  [async.proc :as asp]
  [geo.names :as gn]))

(def TIO {:carrier 1000
 :camera 2222
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data 15000
 :ext-data-popup 60000})
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

(defn point-out-place [dati wiki]
  (let [lat (sv dati "lat")
       lon (sv dati "lng")
       dis (geo/distance-nm (:our-center wiki) [lat lon])]
  (cz/point-out (sv dati "title") [lat lon] dis (:our-radius wiki))))

(defn pump-wiki [bbx chn edata]
  (let [[n s w e] (vec (map read-string bbx))
       [n0 s0 w0 e0] (:bbx @edata)]
  (if (or (>= s n0)
           (<= n s0)
           (<= e w0)
           (>= w e0))
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
	(vswap! edata assoc :bbx [n s w e]))))
           (println "Instance of \"Current BBXWiki Request\" not found!")))))))

(defn pump-weather [chn edata]
  (let [[lat lon] (:our-center @edata)
        [n s w e] (:bbx @edata)
        rsp	(gn/call-geonames-weather lat lon)]
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
	  "wind: " win ", " wins " Knots")
            html	(str "<h3>Weather</h3>" mess)]
        (asp/pump-in chn 
	{:instruct :popup
	 :lat lat
	 :lon lon
	 :html html
	 :time (:ext-data-popup TIO)}))
    (println "Weather information unavailable!"))))

