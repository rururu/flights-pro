(ns pro.server
(:use protege.core)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [async.proc :as asp]
              [cesium.core :as cz]
              [fr24.client :as fr24]
              [rete.core :as rete])
(:import java.io.ByteArrayOutputStream))

(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def DIR-CHN (asp/mk-chan))
(def INS-CHN (asp/mk-chan))
(def ANS-CHN (asp/mk-chan))
(def PORT 4444)
(def APP nil)
(def SERV nil)
(def CALLS (volatile! []))
(def POP-TIM 30000)
(def HISTORY-SEC 80)
(defn index-page []
  (slurp (str ROOT "cezium.html")))

(defn chart-page []
  (slurp (str ROOT "leaflet.html")))

(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn directives [chn]
  (-> (r/response (write-transit (deref (future (asp/pump-out chn)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn answer []
  (-> (r/response (write-transit (deref (future (asp/one-out ANS-CHN)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn current-time []
  (int (/ (System/currentTimeMillis) 1000)))

(defn process-flights [fls]
  (let [crt (current-time)]
  (rete/assert-frame ['Current 'time crt])
  (doseq [[k v] (seq @fls)]
    (let [alt (fr24/altitude v)]
      (rete/assert-frame 
	['Flight
	'id k
	'callsign (fr24/callsign v)
	'coord (fr24/coord v)
	'course (fr24/course v)
	'speed (fr24/speed v)
	'altitude alt
	'time crt
	'status (if (> alt 0)
                                     "LEVEL"
                                     "GROUND")])))
  (rete/fire)))

(defn reset&start-es []
  (rete/reset)
(rete/assert-frame ['History 'time HISTORY-SEC]))

(defn clear
  ([params]
  (clear))
([]
  (fr24/stop)
  (reset&start-es)
  (asp/pump-in INS-CHN
      {:instruct :clear})
  ""))

(defn make-info-html [call img dat]
  (let [head (str "<h3>" call "</h3>")
       itag (str "<img src=\"" img "\">")
       rows (for [[k v] dat]
                 (str "<tr><td>" k "</td><td>" v "</td></tr>"))
      rows (apply str rows)]
  (str head itag "<table>" rows "</table>")))

(defn info [params]
  (let [id (:id params)]
  (if-let [inf (fr24/fl-info id)]
    (let [cal (fr24/callsign id)
           apt (inf "airport")
           acr (inf "aircraft")
           tim (inf "time")
           img (get (first (get-in acr ["images" "thumbnails"])) "src")
           [lat lon] (fr24/coord id)
           dat [["from" (or (get-in apt ["origin" "name"]) "-")]
                  ["to" (or (get-in apt ["destination" "name"]) "-")]
                  ["airline" (or (get-in inf ["airline" "short"]) "-")]
                  ["real-departure" (or (get-in tim ["real" "departure"]) "-")]
                  ["scheduled-arrival" (or (get-in tim ["scheduled" "arrival"]) "-")]
                  ["aircraft" (or (get-in acr ["model" "text"]) "-")]
                  ["latitude" (or lat "-")]
                  ["longitude" (or lon "-")]
                  ["course" (or (fr24/course id) "-")]
                  ["speed" (or (fr24/speed id) "-")]
                  ["altitude" (or (fr24/altitude id) "-")]
                  [(str "<input type='button' style='color:purple' value='Trail'
                             onclick='chart.client.trail(\"" id "\")' >")
                   (str "<input type='button' style='color:blue' value='Follow'
                             onclick='chart.client.follow(\"" id "\")' >")]
                  [""
                   "<input type='button' style='color:red' value='Stop'
                       onclick='chart.client.stopfollow()' >"]]
           htm (make-info-html cal img dat)]
      (asp/pump-in INS-CHN
        {:instruct :popup
         :id (:id params)
         :html htm
         :time POP-TIM}))))
"")

(defn watch-visible
  ([]
  (let [[n s w e] @fr24/BBX]
    (watch-visible {:n n :s s :w w :e e})))
([params]
  (println [:WATCH-VISIBLE params])
  (let [{:keys [n s w e]} params]
    (clear)
    (fr24/set-bbx n s w e)
    (fr24/start process-flights)
    (vreset! CALLS [])
    "")))

(defn update-watch-area []
  (if (= @fr24/STATUS "RUN")
  (watch-visible)))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (index-page))
  (GET "/chart" [] (chart-page))
  (GET "/answer/" [] (answer))
  (GET "/directives/" [] (directives DIR-CHN))
  (GET "/instructions/" [] (directives INS-CHN))
  (GET "/command/:cmd" [cmd & params] 
    ((resolve (symbol (str "pro.server/" cmd))) params))
  (GET "/czml/" [] (cz/events))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(def APP
  (handler/site app-routes)))

(defn start-server
  ([]
    (start-server PORT))
([port]
  (if (nil? APP)
    (init-server))
  (def SERV (jetty/run-jetty APP {:port port :join? false}))))

(defn stop-server []
  (when-let [serv SERV]
  (.stop serv)
  (def SERV nil)
  (println "Server stopped!")))

(defn view3D-in-browser []
  (let [address (str "http://localhost:" PORT)]
  (println "Location:" address)
  (when (java.awt.Desktop/isDesktopSupported)
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

(defn onboard [params]
  (println [:PARAMS params])
(rete/assert-frame ['Onboard 'callsign (:callsign params)])
"")

