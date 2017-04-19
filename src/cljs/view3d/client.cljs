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
(def CARRIER (volatile! {:mode "MANUAL"
               :coord [60 30]
               :altitude 4000
               :speed 160
               :course 270
               :step-hrs (double (/ (:carrier TIO) 3600000))
               :bank-params [12 2 16 64 2]
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

(defn camera-vehicle [vehicle per]
  (let [[lat lon] (:coord vehicle)
        alt  (int (/ (:altitude vehicle) 3.28084))]
  (czm/fly-to lat lon alt (:course vehicle) per)))

(defn camera-manual [carr]
  (let [car @carr]
  (if (= (:mode car) "MANUAL")  
    (camera-vehicle car (int (/ (:camera TIO) 1000))))))

(defn manual-vehicle []
  {:coord   [(num-val (ctl/get-value "input-lat"))
               (num-val (ctl/get-value "input-lon"))]
 :course   (num-val (ctl/get-value "input-crs"))
 :speed    (num-val (ctl/get-value "input-spd"))
 :altitude (num-val (ctl/get-value "input-alt"))})

(defn bank-vehicle [vehicle]
  (let [[rb sa ba fa :as bps] (:bank-params @CARRIER)
       bnk (dyn/bank (:old-course vehicle) (:course vehicle) bps)]
  (czm/camera :roll bnk)))

(defn directives-handler [response]
  (doseq [{:keys [directive] :as dir} (read-transit response)]
  ;;(println [:DIRECTIVE dir])
  (condp = directive
    :manual (vswap! CARRIER assoc :mode "MANUAL")
    :callsigns (let [{:keys [list]} dir]
	(ctl/callsigns (conj list "manual")))
    :vehicle (let [{:keys [callsign vehicle period]} dir]
	(vswap! CARRIER assoc :mode callsign)
	(camera-vehicle vehicle period)
                        (bank-vehicle vehicle)
	(ctl/show-flight-data vehicle))
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

(defn flight-data-manual [carr]
  (let [car @carr]
  (if (= (:mode car) "MANUAL")
    (ctl/show-flight-data car))))

(defn on-load []
  (enable-console-print!)
(GET (str (:command URL) "terrain")
	{:handler (fn [response]
		(czm/init-3D-view (:base URL) response))
	 :error-handler error-handler})
(GET (str (:command URL) "new-czml-doc")
	{:handler (fn [response])
	 :error-handler error-handler})
(mov/set-turn-point CARRIER)
(asp/repeater mov/move CARRIER (:carrier TIO))
(asp/repeater flight-data-manual CARRIER (:display TIO))
(asp/repeater camera-manual CARRIER (:camera TIO))
(asp/repeater receive-directives (:directives TIO))
(asp/repeater send-manual-data (:manual-data TIO))
(ctl/show-controls))


(set! (.-onload js/window) (on-load))