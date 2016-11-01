(ns fligts-pro.core
  (:require [nightlight.core :refer [start]]
            rete.core)
  (:gen-class))

(defn -main [& args]
  (start {:port 4000 :url "http://localhost:4444"})
  (println "\nProtege-3.5")
  (println "A free, open-source ontology editor and framework for building intelligent systems")
  (println "(http://protege.stanford.edu/)\n")
  (edu.stanford.smi.protege.Application/main (make-array String 0)))

