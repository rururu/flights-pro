(ns fr24.client
(:require
  [org.httpkit.client :as client]
  [clj-json.core :as json]
  [async.proc :as asp]
  [my.flights.move :as mfs]
  [calc.geo :refer [distance-nm]]
  [calc.core :refer [abs]]))

(def F24 {:url-flights "http://data-live.flightradar24.com/zones/fcgi/feed.js"
 :url-airports "http://www.flightradar24.com/_json/airports.php"
 :url-flight-data "http://data-live.flightradar24.com/clickhandler/?version=1.5&flight="
 :time-out 16000})
(def BBX (volatile! {:n 0 :s 0 :w 0 :e 0 :z 0}))
(def FLIGHTS (volatile! {}))
(def AIRPORTS (volatile! nil))
(def FL-INFOS (volatile! {}))
(def STATUS (volatile! "START"))
(def MANUAL-DATA (volatile! {}))
(defn json-web-data [url]
  (let [r @(client/get url)
       s (:status r)]
  (if (= s 200)
    (try
      (json/parse-string (:body r))
      (catch Exception e
        (println [:JSON-WEB-DATA :EXCEPTION e])
        nil))
    (do
      (println [:JSON-WEB-DATA :STATUS s])
      nil))))

(defn dat [iod]
  (if (string? iod)
  (@FLIGHTS iod)
  iod))

(defn coord [iod]
  (let [dd (dat iod)]
  [(nth dd 1) (nth dd 2)]))

(defn course [iod]
  (nth (dat iod) 3))

(defn speed [iod]
  (nth (dat iod) 5))

(defn altitude [iod]
  (nth (dat iod) 4))

(defn callsign [iod]
  (nth (dat iod) 16))

(defn merge-my-flights [mff ff]
  (loop [mff (seq mff) ff ff]
  (if (seq mff)
    (let [[id mf] (first mff)
           mf @mf
           [lat lon] (:coord mf)]
      (recur (rest mff) 
        (assoc ff id 
	[0 lat lon (:course mf) (:altitude mf) (:speed mf) 
	 6 7 8 9 10 11 12 13 14 15
	 (:mode mf)])))
    ff)))

(defn flights-in-bbx []
  (let [{:keys [n s w e]} @BBX]
  (if-let [ff (json-web-data (str (:url-flights F24) "?bounds=" n "," s "," w "," e))]
    (vreset! FLIGHTS 
      (->> ff
        (filter #(vector? (second %)))
        ;;(filter #(not (empty? (callsign (second %)))))
        (apply concat)
        (apply hash-map)
        (merge-my-flights @mfs/CARRIERS)
        (merge-my-flights @MANUAL-DATA))))))

(defn by-call [cs]
  (if-let [flt (filter #(= cs (callsign (second %)))
                         @FLIGHTS)]
  (first flt)))

(defn id-by-call [cs]
  (if-let [[id dat] (by-call cs)]
  id))

(defn airports-by-country []
  (letfn [(mk-airports [rows]
            (reduce #(assoc %1
                            (get %2 "country")
                            (assoc (or (get %1 (get %2 "country")) {})
                              (get %2 "name") 
                              %2)) 
                        {} 
                        rows))]
  (or @AIRPORTS
       (let [aps (json-web-data (:url-airports F24))
              aps (mk-airports (get aps "rows"))]
         (vreset! AIRPORTS aps)
         aps))))

(defn fl-info [id]
  (json-web-data (str (:url-flight-data F24) id)))

(defn dat-by-call [cs]
  (if-let [[id dat] (by-call cs)]
  dat))

(defn set-bbx
  ([lat lon]
  (let [{:keys [n s w e]} @BBX
         hla (/ (abs (- n s)) 2)
         hlo (/ (abs (- e w)) 2)]
    (vswap! BBX merge {:n (+ lat hla) :s (- lat hla) :w (- lon hlo) :e (+ lon hlo)}))) 
([mp]
  (vswap! BBX merge mp)))

(defn start [process-fn]
  (println [:FLIGHTS-PROCESS 
  (asp/start-process STATUS 
                               #(do (flights-in-bbx) (process-fn FLIGHTS) true)
                               (:time-out F24)
	       nil)]))

(defn stop []
  (asp/stop-process STATUS))

(defn running? []
  (asp/running? STATUS))

(defn clear-flights []
  (vreset! FLIGHTS {}))

(defn airports-in-bbx [n s w e]
  (letfn [(inside [x]
	(let [lat (x "lat")
	       lon (x "lon")]
	  (and (<= lat n)(>= lat s)(<= lon e)(>= lon w))))]
  (->> (airports-by-country)
           vals
           (mapcat vals)
           (filter inside))))

(defn nearest-airports [n [lat lon]]
  (letfn [(closer [ap1 ap2]
	(let [crd1 [(ap1 "lat")(ap1 "lon")]
	       crd2 [(ap2 "lat")(ap2 "lon")]]
	  (<= (distance-nm [lat lon] crd1)
	         (distance-nm [lat lon] crd2))))]
  (->> (airports-by-country)
           vals
           (mapcat vals)
           (sort closer)
           (take n))))

