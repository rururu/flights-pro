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
              [fr24.client :as fr24])
(:import java.io.ByteArrayOutputStream))

(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def DIR-CHN (asp/mk-chan))
(def INS-CHN (asp/mk-chan))
(def ANS-CHN (asp/mk-chan))
(def PORT 4444)
(def APP nil)
(def SERV nil)
(def CALLS (volatile! []))
(def ONBOARD (volatile! "select"))
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

(defn process-flights [fls]
  (let [cal @CALLS
       onb @ONBOARD]
  (doseq [[k v] (seq @fls)]
    (let [cls (fr24/callsign v)
           veh {:coord (fr24/coord v)
                   :course (fr24/course v)
                   :speed (fr24/speed v)
                   :altitude (fr24/altitude v)
                   :status "LEVEL"}]
      (if (= cls onb)
        (asp/pump-in DIR-CHN
          {:directive :carrier
           :callsign cls
           :vehicle veh}))
      (asp/pump-in INS-CHN
        {:instruct :create-update
         :id k
         :vehicle veh})))
  (if (and (empty? cal) (= onb "select"))
    (let [cal (map fr24/callsign (keys @fls))]
      (vreset! CALLS cal)
      (async.proc/pump-in DIR-CHN 
        {:directive :callsigns :list cal})))))

(defn clear
  ([params]
  (clear))
([]
  (fr24/stop)
  (asp/pump-in INS-CHN
      {:instruct :clear})
  ""))

(defn watch-visible
  ([]
  (let [[n s w e] @fr24/BBX]
    (watch-visible {:n n :s s :w w :e e})))
([params]
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
  (handler/site app-routes))

(asp/repeater update-watch-area (* 3 fr24/F24-TIO)))

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
(vreset! ONBOARD (:callsign params)))

