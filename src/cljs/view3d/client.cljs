(ns view3d.client
(:require
  [csasync.proc :as asp]
  [czm.core :as czm]
  [view3d.controls :as ctl]
  [carr.move :as mov]
  [calc.core :as calc]
  [calc.dynamic :as dyn]
  [cognitect.transit :as t]
  [ajax.core :refer (GET)]
  [cljs.reader :as rdr]
  [nightlight.repl-server]))

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
(def TIO {:carrier 1000
 :camera 3030
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data-popup 60000})
(def CARRIER (volatile! {:mode "?"
               :coord [0 0]
               :altitude 0
               :speed 0
               :course 270
               :step-hrs (double (/ (:carrier TIO) 3600000))
               :bank-params [12 16 64 2]
               :rudder {:target 0
                            :step 3
	    :accel 1
                            :time-out 1017}
               :elevator {:target 0
                            :step 4
	    :accel 1
                            :time-out 997}
               :propeller {:target 0
                            :step 1
	    :accel 1
                            :time-out 2003}}))
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(defn num-val [x]
  (if (number? x) x (rdr/read-string x)))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn turn-and-bank [carr course]
  (let [[rb sa ba fa :as bps] (:bank-params @carr)
       bnk (dyn/bank (:course @carr) course bps)
       spd (:speed @carr)]
  (if (or (< spd 100) (= bnk 0))
    (mov/turn carr course 1)
    (let [accel (if (> (calc/abs bnk) rb) 2 1)]
      (czm/camera :roll bnk)
      (mov/turn carr course accel)
      (dyn/check-diff-and-do carr
        [:rudder :target]
        [:course]
        (get-in @carr [:rudder :step])
        [:rudder :time-out]
        #(czm/camera :roll 0))))))

(defn onboard [call]
  (GET (str (:command URL) "onboard?callsign=" call)
  {:handler (fn [response])
   :error-handler error-handler}))

(defn carrier-interpol [callsign vehicle]
  (let [car @CARRIER]
  (if (not= callsign (:mode car))
    (vswap! CARRIER assoc :mode callsign))
  (let [ocrs (:course car)
         ncrs (:course vehicle)
         [olat olon] (:coord car)
         [nlat nlon] (:coord vehicle)
         ospd (:speed car)
         nspd (:speed vehicle)]
    (vswap! CARRIER assoc 
	:coord [(double (/ (+ olat nlat) 2)) (double (/ (+ olon nlon) 2))]
	:speed (cond
	             (= nspd 0) 0 
	             (= ospd 0) nspd
	             true nspd))
    (mov/elevate CARRIER (:altitude vehicle) 2)
    (mov/set-turn-point CARRIER)
    (if (not= ncrs ocrs)
      (turn-and-bank CARRIER ncrs)))))

(defn carrier-exact [callsign vehicle]
  (if (not= callsign (:mode @CARRIER))
  (vswap! CARRIER assoc :mode callsign))
(vswap! CARRIER merge vehicle)
(mov/set-turn-point CARRIER))

(defn view [dir]
  (czm/camera :view dir))

(defn pitch [deg]
  (let [deg (num-val deg)]
  (if (<= -180 deg 180)
    (czm/camera :pitch deg))))

(defn roll [deg]
  (let [deg (num-val deg)]
  (if (<= -180 deg 180)
    (czm/camera :roll deg))))

(defn course [crs]
  (if (= (:mode @CARRIER) "MANUAL")
  (let [crs (num-val crs)]
    (if (<= 0 crs 360)
      (turn-and-bank CARRIER crs)))))

(defn speed [spd]
  (if (= (:mode @CARRIER) "MANUAL")
  (mov/accel CARRIER (num-val spd))))

(defn altitude [alt]
  (if (= (:mode @CARRIER) "MANUAL")
  (mov/elevate CARRIER (num-val alt))))

(defn accel-speed [accel]
  (if (= (:mode @CARRIER) "MANUAL")
  (vswap! CARRIER assoc-in [:propeller :accel] accel)))

(defn accel-altitude [accel]
  (if (= (:mode @CARRIER) "MANUAL")
  (vswap! CARRIER assoc-in [:elevator :accel] accel)))

(defn latitude [lat]
  (if (= (:mode @CARRIER) "MANUAL")
  (let [car @CARRIER
         lat (num-val lat)
         [_ lon] (:coord car)]
    (mov/set-turn-point CARRIER [lat lon] (:course car) (:speed car)))))

(defn longitude [lon]
  (if (= (:mode @CARRIER) "MANUAL")
  (let [car @CARRIER
         lon (num-val lon)
         [lat _] (:coord car)]
    (mov/set-turn-point CARRIER [lat lon] (:course car) (:speed car)))))

(defn camera-move [carr]
  (let [car @carr
       [lat lon] (:coord car)
       spd (:speed car)
       crs (if (< spd 100) 
	(:target (:rudder car))
	(:course car))
       alt (int (/ (:altitude car) 3.28084))
       k (if (< spd 100) 
	200 
	600)
       per (int (/ (:camera TIO) 1000))] ;; per in sec 
   (czm/fly-to lat lon alt crs per)))

(defn manual-vehicle []
  {:coord   [(num-val (ctl/get-value "input-lat"))
               (num-val (ctl/get-value "input-lon"))]
 :course   (num-val (ctl/get-value "input-crs"))
 :speed    (num-val (ctl/get-value "input-spd"))
 :altitude (num-val (ctl/get-value "input-alt"))})

(defn directives-handler [response]
  (doseq [{:keys [directive] :as dir} (read-transit response)]
  ;;(println [:DIRECTIVE dir])
  (condp = directive
    :manual (if (= (:mode @CARRIER) "?")
	(carrier-exact "MANUAL" (manual-vehicle))
	(vswap! CARRIER assoc :mode "MANUAL"))
    :callsigns (let [{:keys [list]} dir]
	(ctl/callsigns (conj list "manual")))
    :carrier (let [{:keys [callsign vehicle go-onboard]} dir]
	(if go-onboard 
	  (vswap! CARRIER assoc :mode callsign))
	(if (not (= (:mode @CARRIER) "MANUAL"))
	  (if go-onboard 
	    (carrier-exact callsign vehicle)
	    (carrier-interpol callsign vehicle))))
    (println (str "Unknown directive: " [directive dir])))))

(defn receive-directives []
  (GET (:directives URL) {:handler directives-handler
                       :error-handler error-handler}))

(defn send-manual-data []
  (let [carr @CARRIER]
  (if (= (:mode carr) "MANUAL")
    (GET (str (:manual-data URL) 
	"?coord=" (:coord carr)
	"&course=" (:course carr)
	"&speed= " (:speed carr)
	"&altitude=" (:altitude carr))
	{:handler (fn[response])
	 :error-handler error-handler}))))

(defn on-load []
  (enable-console-print!)
(GET (str (:command URL) "terrain")
	{:handler (fn [response]
		(czm/init-3D-view (:base URL) response))
	 :error-handler error-handler})
(GET (str (:command URL) "new-czml-doc")
	{:handler (fn [response])
	 :error-handler error-handler})
(carrier-exact "MANUAL" 
	{:coord [60 30]
	 :altitude 4000
	 :speed 160
	 :course 270})
(asp/repeater mov/move CARRIER (:carrier TIO))
(asp/repeater ctl/show-flight-data CARRIER (:display TIO))
(asp/repeater camera-move CARRIER (:camera TIO))
(asp/repeater receive-directives (:directives TIO))
(asp/repeater send-manual-data (:manual-data TIO))
(ctl/show-controls))


(set! (.-onload js/window) (on-load))