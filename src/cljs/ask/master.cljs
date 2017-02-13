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

(defn input1 [ns header wid]
  (let [inp (str "<input type='text' onchange='javascript:" ns ".handler1(this.value)'
	style='width:" wid "px' 
	value='" header "'>")]
  (set-html! "element1" inp)))

(defn input2 [ns header wid]
  (let [inp (str "<input type='text' onchange='javascript:" ns ".handler2(this.value)'
	style='width:" wid "px' 
	value='" header "'>")]
  (set-html! "element2" inp)))

(defn selector1 [ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler1(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
  (set-html! "element1" sel)))

(defn selector2 [ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler2(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element2" sel)))

(defn selector3 [ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler3(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element3" sel)))

(defn selector4 [ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler4(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element4" sel)))

(defn selector5 [ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler5(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element5" sel)))

(defn selector6 [ns header lst typ wid]
  (let [sel (str "<select onchange='javascript:" ns ".handler6(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element6" sel)))

(defn ask-server [params]
  (GET (:question URL) 
    {:params params
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
(show-chart-controls))

