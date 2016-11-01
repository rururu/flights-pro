(ns pro.server
(:use protege.core)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [async.proc :as asp]
              [cesium.core :as cz])
(:import java.io.ByteArrayOutputStream))

(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def DIR-CHN (asp/mk-chan))
(def ANS-CHN (asp/mk-chan))
(def PORT 4444)
(def APP nil)
(def SERV nil)
(defn index-page []
  (slurp (str ROOT "cezium.html")))

(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn directives []
  (-> (r/response (write-transit (deref (future (asp/pump-out DIR-CHN)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn answer []
  (-> (r/response (write-transit (deref (future (asp/one-out ANS-CHN)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (index-page))
  (GET "/answer/" [] (answer))
  (GET "/directives/" [] (directives))
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

