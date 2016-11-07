(ns fr24.client
(:require
  [org.httpkit.client :as client]
  [clj-json.core :as json]
  [async.proc :as asp]))

(def URL-ARP "http://www.flightradar24.com/_json/airports.php")
(def URL-FLS "http://data-live.flightradar24.com/zones/fcgi/feed.js")
(def URL-FLT "http://data-live.flightradar24.com/clickhandler/?version=1.5&flight=")
(def FLIGHTS (volatile! {}))
(def BBX (volatile! [0 0 0 0]))
(def STATUS (volatile! "STOP"))
(def F24-TIO 2000)
(defn json-web-data [url]
  (let [r @(client/get url)
       s (:status r)]
  (if (= s 200)
    (try
      (json/parse-string (:body r))
      (catch Exception e
        (println [:EXCEPTION e])
        nil))
    (do
      (println [:STATUS s])
      nil))))

(defn flights-in-bbx []
  (let [[n s w e] @BBX]
  (when-let [ff (json-web-data (str URL-FLS "?bounds=" n "," s "," w "," e))]
    (vreset! FLIGHTS ff)
    ff)))

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

(defn by-call [cs]
  (if-let [flt (filter #(and (vector? (second %)) 
                                   (= cs (callsign (second %)))) 
                         (seq @FLIGHTS))]
  (first flt)))

(defn id-by-call [cs]
  (if-let [[id dat] (by-call cs)]
  id))

(defn dat-by-call [cs]
  (if-let [[id dat] (by-call cs)]
  dat))

(defn set-bbx [n s w e]
  (vreset! BBX [n s w e]))

(defn start [process-fn]
  (asp/start-process STATUS 
                               #(do (flights-in-bbx) (process-fn) true)
                               F24-TIO))

(defn stop []
  (asp/stop-process STATUS))

(defn running? []
  (asp/running? STATUS))

