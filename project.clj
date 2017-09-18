(defproject fligts-pro "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [nightlight "1.1.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 [protege "3.5.0"]
                 [protege/standard-extensions "3.5.0"]
                 [protege/looks "3.5.0"]
                 [protege/unicode_panel "3.5.0"]
                 [protege/JGo "3.5.0"]
                 [protege/JGoLayout "3.5.0"]
                 [protege/ClojureTab "1.5.0"]
                 [rete "5.3.0-SNAPSHOT"]
                 [org.clojure/core.async "0.3.442"]
                 [ring "1.6.0"]
                 [compojure "1.6.0"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [cljs-ajax "0.5.9"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [http-kit "2.2.0"]
                 [clj-json "0.5.3"]]
  :javac-options ["-target" "1.7" "-source" "1.7" "-Xlint:-options"]
  :repositories {"local" {:url ~(str (.toURI (java.io.File. "repo"))) :checksum :warn}}
  :profiles {:uberjar {:aot :all}}
  :main fligts-pro.core)
