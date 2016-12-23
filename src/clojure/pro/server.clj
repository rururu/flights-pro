(ns pro.server
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [async.proc :as asp]
              [pro.commands :as cmd])
(:import java.io.ByteArrayOutputStream))

(def HOST "http://localhost:")
(def PORT 4444)
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def APP nil)
(def SERV nil)
(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn response1 [chn]
  (-> (r/response (write-transit (deref (future (asp/one-out chn)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn responseN [chn]
  (-> (r/response (write-transit (deref (future (asp/pump-out chn)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn view3D-in-browser []
  (let [address (str HOST PORT)]
  (println "Location:" address)
  (when (java.awt.Desktop/isDesktopSupported)
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (slurp (str ROOT "cezium.html")))
  (GET "/chart" [] (slurp (str ROOT "leaflet.html")))
  (GET "/czml/" [] (responseN (cmd/czml-chan)))
  (GET "/answer/" [] (response1 (:answer cmd/CHN)))
  (GET "/directives/" [] (responseN (:directives cmd/CHN)))
  (GET "/instructions/" [] (responseN (:instructions cmd/CHN)))
  (GET "/command/:cmd" [cmd & params] 
    ((resolve (symbol (str "pro.commands/" cmd))) params))
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

