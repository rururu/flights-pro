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

(defn show-chart-controls []
  (set-html! "commands-header" "<h4>Commands</h4>")
(set-html! "commands"
  "<select onchange='javascript:chart.client.command(this.value)'>
   <option value='commands'>Commands</option>
   <option value='watch-visible'>Watch visible area</option>
   <option value='intersect'>Intersections</option>
   <option value='move-to'>Move to Airport</option>
   <option value='schedule'>Schedule Flight</option>
   <option value='wikipedia'>Toggle Wikipedia</option>
   <option value='clear'>Clear</option>
   </select>"))

