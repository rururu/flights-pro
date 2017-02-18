(ns ext.data
(:use protege.core)
(:require 
  [wiki.gis :as wig]
  [async.proc :as asp]))

(def TIO {:carrier 1000
 :camera 4200
 :directives 911
 :instructions 979
 :vehicles 200
 :display 831
 :manual-data 6000
 :ext-data 15000
 :ext-data-popup 60000})
(defmacro with-timeout [msec & body]
  `(let [f# (future (do ~@body))
         v# (gensym)
         result# (deref f# ~msec v#)]
    (if (= v# result#)
      (do
        (println :FUTURE-CANCELLING)
        (future-cancel f#)
        (println :FUTURE-CANCELLED)
        nil)
      result#)))

(defn placemark-instruct [dati]
  {:instruct :create-placemark
 :iname (.getName dati)
 :lat (sv dati "lat")
 :lon (sv dati "lng")
 :feature (sv dati "feature")})

(defn placemark-popup-instruct [inam]
  (if-let [dati (ins inam)]
  (let [head (str "<h3>" (sv dati "title") "</h3>")
         itag (str "<img src=\"" (sv dati "thumbnailImg") "\">")
         summ (sv dati "summary")
         addr (str "http://" (sv dati "wikipediaUrl") "\"")
         wiki (str "<a href=\"" addr "\">" addr "</a>")
         html (str head itag "<br>" summ "<br>" wiki)]
    {:instruct :popup
     :lat (sv dati "lat")
     :lon (sv dati "lng")
     :html html
     :time (:ext-data-popup TIO)})))

(defn pump-wiki [bbx chn wiki]
  (let [[n s w e] (vec (map read-string bbx))
       [n0 s0 w0 e0] (:bbx @wiki)]
  (if (or (>= s n0)
           (<= n s0)
           (<= e w0)
           (>= w e0))
     (invoke-later
       (let [bbi (foc "BBX" "title" "Current")
              rqi (fainst (cls-instances "BBXWiki") "Current BBXWiki Request")]
         (if (and bbi rqi)
           (do
             (ssvs bbi "wsen" (vec (map float [w s e n])))
             (ssv rqi "bbx" bbi)
             (ssvs rqi "responses" [])
             (with-timeout (:ext-data TIO)
	(wig/submit-bbx (itm rqi 0) rqi))
             (let [rr (svs rqi "responses")]
               (when (seq rr)
	(asp/pump-in chn {:instruct :clear-placemarks})
	(doseq [r rr]
	  (asp/pump-in chn (placemark-instruct r)))
	(vswap! wiki assoc :bbx [n s w e]))))
           (println "Instance of \"Current BBXWiki Request\" not found!")))))))

