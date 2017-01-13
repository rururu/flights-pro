(ns fr24.client
(:require
  [org.httpkit.client :as client]
  [clj-json.core :as json]
  [async.proc :as asp]))

(def F24 {:url-flights "http://data-live.flightradar24.com/zones/fcgi/feed.js"
 :url-airports "http://www.flightradar24.com/_json/airports.php"
 :url-flight-data "http://data-live.flightradar24.com/clickhandler/?version=1.5&flight="
 :time-out 12000})
(def BBX (volatile! [0 0 0 0]))
(def FLIGHTS (volatile! {}))
(def AIRPORTS (volatile! nil))
(def FL-INFOS (volatile! {}))
(def STATUS (volatile! "START"))
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

(defn flights-in-bbx []
  (let [[n s w e] @BBX]
  (if-let [ff (json-web-data (str (:url-flights F24) "?bounds=" n "," s "," w "," e))]
    (vreset! FLIGHTS 
      (->> ff
        (filter #(vector? (second %)))
        ;;(filter #(not (empty? (callsign (second %)))))
        (apply concat)
        (apply hash-map))))))

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

(defn set-bbx [n s w e]
  (vreset! BBX [n s w e]))

(defn start [process-fn]
  (println [:FLIGHTS-PROCESS 
  (asp/start-process STATUS 
                               #(do (flights-in-bbx) (process-fn FLIGHTS) true)
                               (:time-out F24))]))

(defn stop []
  (asp/stop-process STATUS))

(defn running? []
  (asp/running? STATUS))

(defn clear-flights []
  (vreset! FLIGHTS {}))

