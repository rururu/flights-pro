(ns pro.commands
(:use protege.core)
(:require [compojure.core :refer [GET]]
              [fr24.client :as fr24]
              [async.proc :as asp]
              [rete.core :as rete]))

(def HOST "http://localhost:")
(def PORT 4444)
(def URL {:base (str HOST PORT "/")
 :chart (str HOST PORT "/chart/")
 :directives (str HOST PORT "/directives/")
 :instructions (str HOST PORT "/instructions/")
 :command (str HOST PORT "/command/")})
(def CHN {:answer (asp/mk-chan)
 :directives (asp/mk-chan)
 :instructions (asp/mk-chan)
 :czml (asp/mk-chan)})
(def HISTORY-SEC 80)
(def TIM {:popup 30000
 :trail 60000})
(defn current-time []
  (int (/ (System/currentTimeMillis) 1000)))

(defn process-flights [fls]
  (let [crt (current-time)]
  (println crt)
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
  (println :B)
  (rete/fire)
  (println :A)
  true))

(defn clear
  ([params]
  (clear))
([]
  (fr24/stop)
  (fr24/clear-flights)
  (rete/reset)
  (asp/pump-in (:instructions CHN)
      {:instruct :clear})
  ""))

(defn make-info-html [call img dat]
  (let [head (str "<h3>" call "</h3>")
       itag (str "<img src=\"" img "\">")
       rows (for [[k v] dat]
                 (str "<tr><td>" k "</td><td>" v "</td></tr>"))
      rows (apply str rows)]
  (str head itag "<table>" rows "</table>")))

(defn info [id]
  (GET (str (:command URL) "info?id=" id)
  {:handler (fn [response])
   :error-handler error-handler}))

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
    "")))

(defn onboard [params]
  (println [:PARAMS params])
(let [cls (:callsign params)]
  (condp = cls
    "manual" (do
                     (asp/pump-in (:directives CHN)
	{:directive :manual})
                     (rete/assert-frame ['Onboard 'callsign "STOP"]))
   "select" (let [lst (vec (sort (map fr24/callsign (keys @fr24/FLIGHTS))))]
                   (asp/pump-in (:directives CHN)
	{:directive :callsigns
	 :list lst}))
    (rete/assert-frame ['Onboard 'callsign cls 'time 0]))
  ""))

(defn terrain [params]
  "yes")

(defn update-watch-area []
  (if (= @fr24/STATUS "RUN")
  (watch-visible)))

(defn trail
  ([params]
  (trail params []))
([params head]
  (if-let [inf (info params)]
    (let [trl (mapcat #(list (% "lat") (% "lng") (% "alt")) (inf "trail"))]
      (asp/pump-in (:instructions CHN)
        {:instruct :trail
         :id (:id params)
         :points (concat head trl)
         :options {:weight 3
                        :color "purple"}
         :time (:trial TIM)})))
  ""))

