(ns ask.master
)

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

(defn selector1 [header lst typ wid]
  (let [sel (str "<select onchange='javascript:ask.master.handler1(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element1" sel)))

(defn selector2 [header lst typ wid]
  (let [sel (str "<select onchange='javascript:ask.master.handler2(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element2" sel)))

(defn selector3 [header lst typ wid]
  (let [sel (str "<select onchange='javascript:ask.master.handler3(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element3" sel)))

(defn selector4 [header lst typ wid]
  (let [sel (str "<select onchange='javascript:ask.master.handler4(this.value)' style='width:" wid "px'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element4" sel)))

(defn error-handler [response]
  (let [{:keys [status status-text]} response]
  (println (str "AJAX ERROR: " status " " status-text))))

(defn ask-server
  ([params handler]
  (ask-server "question/" params handler))
([path params handler]
  (GET (str HOST PORT path) 
    {:params params
     :handler handler
     :error-handler error-handler
     :response-format :transit})))

