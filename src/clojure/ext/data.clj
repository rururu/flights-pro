(ns ext.data
(:use protege.core)
(:require 
  [wiki.gis :as wig]))

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

(defn placemark-instruct [inam]
  (if-let [dati (ins inam)]
  {:instruct :create-placemark
   :iname (.getName dati)
   :lat (sv dati "lat")
   :lon (sv dati "lng")
   :feature (sv dati "feature")}))

(defn placemark-popup-instruct [inam]
  (if-let [dati (ins inam)]
  (let [head (str "<h3>" (sv dati "title") "</h3>")
         itag (str "<img src=\"" (sv dati "thumbnailImg") "\">")
         summ (get dati "summary")
         addr (str "http://" (sv dati "wikipediaUrl") "\"")
         wiki (str "<a href=\"" addr "\">" addr "</a>")
         html (str head itag "<br>" summ "<br>" wiki)]
    {:instruct :popup
     :lat (sv dati "lat")
     :lon (sv dati "lng")
     :html html
     :time (:ext-data-popup TIO)})))

(defn wiki-data [n s w e]
  (let [bbi (foc "BBX" "title" "Current")
       rqi (fainst (cls-instances "BBXWiki") "Current BBXWiki Request")]
  (if (and bbi rqi)
    (let [wsen (vec (map float [w s e n]))]
      (ssvs bbi "wsen" wsen)
      (ssv rqi "bbx" bbi)
      (with-timeout (:ext-data TIO)
	(wig/submit-bbx (itm rqi 0) rqi))
      (map #(placemark-instruct (.getName %)) (svs rqi "responses")))
    (do (println "Instance of \"Current BBXWiki Request\" not found!") []))))

