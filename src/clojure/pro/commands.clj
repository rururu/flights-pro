(ns pro.commands
(:use protege.core)
(:require 
  [compojure.core :refer [GET]]
  [fr24.client :as fr24]
  [async.proc :as asp]
  [rete.core :as rete]
  [cesium.core :refer [iso8601curt]]
  [ext.data :as exd]))

(def HOST "http://localhost:")
(def PORT 4444)
(def URL {:base (str HOST PORT "/")
 :chart (str HOST PORT "/chart/")
 :directives (str HOST PORT "/directives/")
 :instructions (str HOST PORT "/instructions/")
 :command (str HOST PORT "/command/")
 :question (str HOST PORT "/question/")
 :answer (str HOST PORT "/answer/")
 :manual-data (str HOST PORT "/manual-data/")})
(def CHN {:answer (asp/mk-chan)
 :directives (asp/mk-chan)
 :instructions (asp/mk-chan)})
(def TIM {:popup 30000
 :trail 30000})
(def MY-INFOS (volatile! {"MANUAL"
  {"airport" {"origin" {"name" "unk" "code" {"iata" "unk"}}
                  "destination" {"name" "unk" "code" {"iata" "unk"}}}

   "aircraft" {"model" {"text" "Ru Lentokone"}
                   "images" {"thumbnails" [{"src" "img/5.jpg"}]}}

   "time" {"real" {"departure" "unk"}
               "scheduled" {"arrival" "unk"}}

   "airline" {"short" "Ru Airlines"}}}))
(def TERRAIN "no")
(def APT-ALT 0)
(def WIKI (volatile! 
  {:on false
   :bbx [0 0 0 0]}))
(defn current-time []
  (int (/ (System/currentTimeMillis) 1000)))

(defn process-flights [fls]
  (let [crt (current-time)
       fls (seq @fls)]
  (println "t:" crt "flights:" (count fls))
  (doseq [[k v] fls]
    (let [alt (fr24/altitude v)
           [lat lon :as crd] (fr24/coord v)]
      (rete/assert-frame 
	['Flight
	'id k
	'callsign (fr24/callsign v)
	'coord crd
	'course (fr24/course v)
	'speed (fr24/speed v)
	'altitude alt
	'time crt
	'point4d [lat lon (int (/ alt 3.28084)) (iso8601curt)]
	'age "NEW"
	'status (if (> alt APT-ALT)
                                     "LEVEL"
                                     "GROUND")])))
  (rete/fire)
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

(defn update-watch-area []
  (if (= @fr24/STATUS "RUN")
  (watch-visible)))

(defn do-trail [id trail]
  (let [pts (if (not (empty? trail))
               trail
               (if-let [inf (fr24/fl-info id)]
                   (mapcat #(list (% "lat") (% "lng") (% "alt")) (inf "trail"))))]
  (if pts
    (asp/pump-in (:instructions CHN)
        {:instruct :trail
         :id id
         :points pts
         :options {:weight 3
                        :color "purple"}
         :time (:trail TIM)}))))

(defn set-map-view [coord]
  (asp/pump-in (:instructions CHN)
	{:instruct :map-center
	 :coord coord}))

(defn info [params]
  (println [:CMD-INFO params])
(let [id (:id params)]
  (if (.startsWith id "pm")
    (when-let [dati (.getInstance (.substring id 2))]
      (exd/point-out-place dati)
      (asp/pump-in (:instructions CHN) 
        (exd/placemark-popup-instruct dati)))
    (let [inf (or (get @MY-INFOS id) (fr24/fl-info id))
           cal (if-let[d (fr24/dat id)]
                   (fr24/callsign d)
                   id)]
      (if inf
        (let [apt (inf "airport")
               acr (inf "aircraft")
               tim (inf "time")
               img (get (first (get-in acr ["images" "thumbnails"])) "src")
               [lat lon] (fr24/coord id)
               dat   [["from" (or (get-in apt ["origin" "name"]) "-")]
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
          (asp/pump-in (:instructions CHN)
            {:instruct :popup
             :id (:id params)
             :html htm
             :time (:popup TIM)}))))))
"")

(defn onboard [params]
  (println [:CMD-ONBOARD params])
(let [cls (:callsign params)]
  (condp = cls
    "manual" (do
                     (asp/pump-in (:directives CHN)
	{:directive :manual})
                     (rete/assert-frame ['Onboard 'callsign "STOP"]))
   "select" (let [lst (vec (sort (map fr24/callsign (keys @fr24/FLIGHTS))))
                       lst (filter #(not (empty? %)) lst)]
                  (asp/pump-in (:directives CHN)
	{:directive :callsigns
	 :list lst}))
    (rete/assert-frame ['Onboard 'callsign cls 'time 0])))
"")

(defn terrain [params]
  (println [:CMD-TERRAIN params])
(println "Terrain: " TERRAIN)
TERRAIN)

(defn follow [params]
  (println [:CMD-FOLLOW params])
(let [id (:id params)]
  (if (fr24/dat id)
    (rete/assert-frame ['Follow 'id id 'time 0]))))

(defn visible [params]
  (println [:CMD-VISIBLE params])
(let [{:keys [n s w e]} params]
  (if (:on @WIKI)
    (exd/pump-wiki [n s w e] (:instructions CHN) WIKI))
  (fr24/set-bbx n s w e))
"")

(defn trail [params]
  (println [:CMD-TRAIL params])
(do-trail (:id params) [])
"")

(defn stopfollow [params]
  (println [:CMD-STOPFOLLOW params])
(rete/assert-frame ['Follow 'id "STOP" 'time 0])
"")

(defn direct-question [pp]
  (condp = (:question pp)
  "countries" (->> (fr24/airports-by-country)
	keys
	sort)
  "airports" (->> (get (fr24/airports-by-country) (:country pp))
	keys
	sort)
  true ""))

(defn question [pp]
  ;;(println [:QUESTION pp])
(if (= (:whom pp) "direct")
  (asp/pump-in (:answer CHN) (direct-question pp))
  (do (rete/assert-frame 
	['Question
	 'predicate (:predicate pp)
	 'subject (:subject pp)
	 'object (:object pp)])
        (rete/fire)))
{:status 204})

(defn foc-apt-ins [apt]
  ;; find or create airport instance
(invoke-later
(let [iata (apt "iata")]
  (if (not (fifos "Airport" "iata" iata))
    (let [ins (crin "Airport")]
      (ssv ins "title" (apt "name"))
      (ssv ins "iata" iata)
      (ssv ins "icao" (apt "icao"))
      (ssv ins "country" (apt "country"))
      (ssv ins "altitude" (apt "alt"))
      (ssvs ins "coord" [(float (apt "lat"))
	          (float (apt "lon"))]))))
))

(defn move-to [params]
  (println [:CMD-MOVE-TO params])
(let [{:keys [country airport]} params]
  (if-let [apt (get-in (fr24/airports-by-country) [country airport])]
    (let [iata (apt "iata")
           alt (apt "alt")
           crd [(apt "lat") (apt "lon")]]
      (foc-apt-ins apt)
      (if (= TERRAIN "yes")
        (def APT-ALT alt)) 
      (set-map-view crd)
      (println :Airport country airport iata crd alt))))
"")

(defn schedule [params]
  (println [:CMD-SCHEDULE params])
(let [{:keys [callsign time country1 airport1 country2 airport2]} params
       abc (fr24/airports-by-country)
       apf (get-in abc [country1 airport1])
       apt (get-in abc [country2 airport2])
       mes "Airport not found: "]
  (if (and apf apt)
    (do (foc-apt-ins apf)
      (foc-apt-ins apt)
      (rete/assert-frame ['Schedule 
	'callsign callsign
	'time time
	'from apf
	'to apt]))
    (do (if (nil? apf)
            (println mes country1 airport1))
          (if (nil? apt)
            (println mes country2 airport2)))))
"")

(defn set-my-flight-info [csoid dept fapt tapt]
  (vswap! MY-INFOS assoc csoid
  {"airport" {"origin" {"name" (fapt "name") "code" {"iata" (fapt "iata")}}
                  "destination" {"name" (tapt "name") "code" {"iata" (tapt "iata")}}}

   "aircraft" {"model" {"text" "Ru Lentokone"}
                   "images" {"thumbnails" [{"src" (str "img/" (int  (rand 7)) ".jpg")}]}}

   "time" {"real" {"departure" dept}
               "scheduled" {"arrival" "unk"}}

   "airline" {"short" "Ru Airlines"}}))

(defn get-manual-data [params]
  (vswap! fr24/MANUAL-DATA assoc "MANUAL"
          (volatile! {:callsign "MANUAL"
	 :coord (read-string (:coord params))
	 :course (read-string (:course params))
	 :speed (read-string (:speed params))
	 :altitude (read-string (:altitude params))})))

(defn wikipedia [params]
  (println [:CMD-WIKIPEDIA params])
(if (:on @WIKI)
  (do (vswap! WIKI assoc :on false)
    (asp/pump-in (:instructions CHN)
	 {:instruct :clear-placemarks})
    (vswap! WIKI assoc :bbx [0 0 0 0]))
  (let [[n s w e] @fr24/BBX]
    (vswap! WIKI assoc :on true)
    (visible {:n (str n) :s (str s) :w (str w) :e (str e)})))
(println [:WIKI (:on @WIKI)])
"")

(defn go-initial-airport []
  (if-let [api (fainst (cls-instances "Airport") "Initial Airport")]
  (move-to {:country (sv api "country")
	:airport (sv api "title")})
  (println "Annotated Initial Airport not found!")))

(defn intersect [params]
  (println [:CMD-INTERSECT params])
"")

