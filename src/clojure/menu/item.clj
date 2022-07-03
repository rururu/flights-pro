(ns menu.item
(:use protege.core)
(:import clojuretab.ClojureTab))

(defn clojure-work []
  (println "Loading Clojure Programs...")
(if-let [wps (ClojureTab/findAnnotated (cls-instances "WorkingPrograms") nil)]
  (loop [i 1 pins (svs wps "cloPrograms")]
    (when (seq pins)
      (println (str " 1." i " " (sv (first pins) "title") " = " (ClojureTab/loadProgram (first pins)) ))
      (recur (inc i) (rest pins))))
  (println "  Annotated instance of WorkingPrograms not found!"))
(println"Starting Pro Server...")
(eval '(pro.server/start-server))
(println"Starting My Flights Movement...")
(eval '(my.flights.move/start-movement))
(println"Starting Expert System...")
(eval '(ru.rules/run-engine "Flights Pro Run"))
(println"Go Initial Airport...")
(eval '(pro.commands/go-initial-airport)))

