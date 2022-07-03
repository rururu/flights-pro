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
  [cljs.reader :as rdr]))

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
 :new-czml-doc 4000
 :manual-data 6000
 :ext-data-popup 60000})
(def CARRIER (volatile! {:mode "MANUAL"
               :coord [60 30]
               :altitude 4000
               :speed 160
               :course 270
               :status "LEVEL"
               :step-hrs (double (/ (:carrier TIO) 3600000))
               ;; [middle-bank small-arc middle-arc big-arc factor]
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
(def VEHICLE (volatile! {:mode "MANUAL"
               :coord [60 30]
               :altitude 4000
               :speed 160
               :course 270}))
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(defn num-val [x]
  (if (number? x) x (rdr/read-string x)))

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn turn-and-bank [carr course]
  (let [[mb sa ma ba fa :as bps] (:bank-params @carr)
       bnk (dyn/bank (:course @carr) course bps)
       spd (:speed @carr)]
  (if (or (< spd 100) (= bnk 0))
    (mov/turn carr course 1 nil)
    (let [accel (if (> (calc/abs bnk) mb) 2 1)]
      (czm/camera :roll bnk)
      (mov/turn carr course accel #(czm/camera :roll 0))))))

(defn onboard [call]
  (if (= call "MANUAL")
  (do (vswap! CARRIER merge @VEHICLE)
    (mov/set-turn-point CARRIER)) 
  (vswap! CARRIER assoc :mode call))
(GET (str (:command URL) "onboard?callsign=" call)
  {:handler (fn [response])
   :error-handler error-handler}))

(defn view [deg]
  (let [deg (num-val deg)]
  (when (<= -180 deg 180)
    (czm/camera :view deg)
    (ctl/set-html! "view-fld" deg))))

(defn pitch [deg]
  (let [deg (num-val deg)]
  (when (<= -180 deg 180)
    (czm/camera :pitch deg)
    (ctl/set-html! "pitch-fld" deg))))

(defn roll [deg]
  (let [deg (num-val deg)]
  (when (<= -180 deg 180)
    (czm/camera :roll deg)
    (ctl/set-html! "roll-fld" deg))))

(defn course [crs]
  (if (= (:mode @CARRIER) "MANUAL")
  (let [crs (num-val crs)]
    (if (<= 0 crs 360)
      (turn-and-bank CARRIER crs)))))

(defn speed [spd]
  (if (= (:mode @CARRIER) "MANUAL")
  (mov/accel CARRIER (num-val spd))))

(defn level-view []
  (czm/camera :pitch (ctl/get-value "pitch-val")))

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
)

(defn instantly-to [lat lon]
  (mov/set-turn-point CARRIER [lat lon] (@CARRIER :course) (@CARRIER :speed)))

(defn longitude [lon]
  (if (= (:mode @CARRIER) "MANUAL")
  (let [lon (num-val lon)
         lat (num-val (ctl/get-value "input-lat"))
         bea (mov/bear-deg-js (:coord @CARRIER) [lat lon])
         ins (.-checked (ctl/by-id "input-instant"))]
    (if ins
      (do
        (instantly-to lat lon)
        (GET (str (:command URL) "goto?lat=" lat "&lon=" lon "&from=COCKPIT")))
      (course (int bea))))))

(defn camera-vehicle [vehicle per]
  (let [[lat lon] (:coord vehicle)
       alt (:altitude vehicle)]
  (vswap! VEHICLE merge vehicle)
  (if (<= per 0)
    (czm/move-to lat lon 
	(int (/ alt 3.28084)) 
	(:course vehicle))
    (czm/fly-to lat lon 
	(int (/ alt 3.28084)) 
	(:course vehicle) 
	per))))

(defn camera-manual [carr]
  (let [car @carr]
  (if (= (:mode car) "MANUAL")  
    (camera-vehicle car (int (/ (:camera TIO) 1000))))))

(defn manual-vehicle []
  {:mode "MANUAL"
 :coord   [(num-val (ctl/get-value "input-lat"))
               (num-val (ctl/get-value "input-lon"))]
 :course   (num-val (ctl/get-value "input-crs"))
 :speed    (num-val (ctl/get-value "input-spd"))
 :altitude (num-val (ctl/get-value "input-alt"))})

(defn bank-vehicle [vehicle]
  (czm/camera :roll 
  (if (> (:speed vehicle) 120)
    (dyn/bank (:old-course vehicle) 
	(:course vehicle) 
	(:bank-params @CARRIER))
    0)))

(defn dynamics [dm]
  (let [bk (dm "bank")
       bk [(bk "middle-bank")
             (bk "small-arc")
             (bk "middle-arc")
             (bk "big-arc")
             (bk "factor")]]
  (vswap! CARRIER assoc :bank-params bk)
  (vswap! CARRIER assoc-in [:propeller :step] (dm "propeller-step"))
  (vswap! CARRIER assoc-in [:propeller :time-out] (dm "propeller-time-out"))
  (vswap! CARRIER assoc-in [:elevator :step] (dm "elevator-step"))
  (vswap! CARRIER assoc-in [:elevator :time-out] (dm "elevator-time-out"))
  (vswap! CARRIER assoc-in [:rudder :step] (dm "rudder-step"))
  (vswap! CARRIER assoc-in [:rudder :time-out] (dm "rudder-time-out")))
(println :new-dynamics @CARRIER))

(defn adjust-pitch [nsts]
  (let [osts (:status @CARRIER)
       fptc (num-val (ctl/get-value "pitch-val"))]
  (cond
    (and (not= osts "LEVEL") (= nsts "GROUND")) (czm/camera :pitch fptc)
    (and (not= osts "LEVEL") (= nsts "LEVEL")) (czm/camera :pitch fptc)
    (and (not= osts "CLIMB") (= nsts "CLIMB"))
	(cond 
	  (= (:view @czm/CAMERA) "FORWARD")  (czm/camera :pitch (+ fptc 6))
	  (= (:view @czm/CAMERA) "BACKWARD") (czm/camera :pitch  (- fptc 6)))
    (and (not= osts "DESCEND") (= nsts "DESCEND"))
	(cond 
	  (= (:view @czm/CAMERA) "FORWARD")  (czm/camera :pitch (- fptc 6))
	  (= (:view @czm/CAMERA) "BACKWARD") (czm/camera :pitch  (+ fptc 6))))
  (vswap! CARRIER assoc :status nsts)))

(defn directives-handler [response]
  (doseq [{:keys [directive] :as dir} (read-transit response)]
  ;;(println [:DIRECTIVE dir])
  (condp = directive
    :callsigns (let [{:keys [list]} dir]
	(ctl/callsigns list))
    :vehicle (let [{:keys [vehicle period]} dir]
                        (bank-vehicle vehicle)
	(camera-vehicle vehicle period)
	(ctl/show-flight-data vehicle))
    :dynamics (let [{:keys [dynamo]} dir]
	(dynamics dynamo))
    :onboard-status (let [{:keys [status]} dir]
	(adjust-pitch status))
    :instantly-to (let [{:keys [lat lon]} dir]
	(instantly-to lat lon))
    (println (str "Unknown directive: " [directive dir])))))

(defn receive-directives []
  (GET (:directives URL) {:handler directives-handler
                       :error-handler error-handler}))

(defn send-manual-data []
  (let [car @CARRIER]
  (if (= (:mode car) "MANUAL")
    (GET (str (:manual-data URL) 
	"?coord=" (:coord car)
	"&course=" (:course car)
	"&speed= " (:speed car)
	"&altitude=" (:altitude car))
	{:handler (fn[response])
	 :error-handler error-handler}))))

(defn flight-data-manual [carr]
  (let [car @carr]
  (if (= (:mode car) "MANUAL")
    (ctl/show-flight-data car))))

(defn new-czml-doc []
  (GET (str (:command URL) "new-czml-doc")
	{:handler (fn [response])
	 :error-handler error-handler}))

(defn on-load []
  (enable-console-print!)
(GET (str (:command URL) "terrain")
	{:handler (fn [response]
		(czm/init-3D-view (:base URL) (read-transit response)))
	 :error-handler error-handler})
(mov/set-turn-point CARRIER)
(asp/repeater mov/move CARRIER (:carrier TIO))
(asp/repeater flight-data-manual CARRIER (:display TIO))
(asp/repeater camera-manual CARRIER (:camera TIO))
(asp/repeater receive-directives (:directives TIO))
(asp/repeater send-manual-data (:manual-data TIO))
(asp/repeater new-czml-doc (:new-czml-doc TIO))
(ctl/show-controls))


(set! (.-onload js/window) (on-load))