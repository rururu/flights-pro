(ns ask.master
(:require 
  [ajax.core :refer [GET]]
  [chart.controls :refer [show-chart-controls]]))

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
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(defn by-id  [id]
  (.getElementById js/document id))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn options [lst typ]
  (condp = typ
    :itself (apply str (for [e lst]
                         (str "<option value='" e "'>" e "</option>")))
    :count  (apply str (for [i (range (count lst))]
                            (str "<option value='" i "'>" (nth lst i) "</option>")))))

(defn input [element k ns header wid]
  (let [inp (str "<input type='text' onchange='javascript:" ns ".handler" k "(this.value)'
	style='width:" wid "px' 
	value='" header "'>")]
  (set-html! (str element k) inp)))

(defn selector [element k ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler" k "(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
  (set-html! (str element k) sel)))

(defn ask-server [params handler]
  (GET (:question URL) 
    {:params params
     :handler handler
     :error-handler error-handler
     :response-format :transit}))

(defn get-answer [handler]
  (GET (:answer URL) 
  {:handler handler
   :error-handler error-handler
   :response-format :transit}))

(defn clear-dialog []
  (set-html! "element1" "")
(set-html! "element2" "")
(set-html! "element3" "")
(set-html! "element4" "")
(set-html! "element5" "")
(set-html! "element6" "")
(set-html! "element20" "")
(set-html! "element30" "")
(set-html! "element40" "")
(show-chart-controls))

