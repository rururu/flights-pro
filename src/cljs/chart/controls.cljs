(ns chart.controls
(:require
 [goog.string :as gstring]
 [goog.string.format]))

(defn format [fmt & args]
  (apply gstring/format fmt args))

(defn by-id  [id]
  (.getElementById js/document id))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn mouse-move [lat lng]
  (set-html! "mousepos" (str "lat " (format "%.4f" lat) " lon " (format "%.4f" lng))))

