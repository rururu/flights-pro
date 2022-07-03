(ns eval-soup.core
  (:require [clojure.string :as str]
            [cljs.core.async :refer [chan put! <!]]
            [cljs.js :refer [empty-state eval js-eval]]
            [cljs.reader :refer [read-string]]
            [clojure.walk :refer [walk]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import goog.net.XhrIo))

(defn fix-goog-path [path]
  ; goog/string -> goog/string/string
  ; goog/string/StringBuffer -> goog/string/stringbuffer
  (let [parts (str/split path #"/")
        last-part (last parts)
        new-parts (concat
                    (butlast parts)
                    (if (= last-part (str/lower-case last-part))
                      [last-part last-part]
                      [(str/lower-case last-part)]))]
    (str/join "/" new-parts)))

(defn custom-load!
  ([opts cb]
   (if (re-matches #"^goog/.*" (:path opts))
     (custom-load!
       (update opts :path fix-goog-path)
       [".js"]
       cb)
     (custom-load!
       opts
       (if (:macros opts)
         [".clj" ".cljc"]
         [".cljs" ".cljc" ".js"])
       cb)))
  ([opts extensions cb]
   (if-let [extension (first extensions)]
     (try
       (.send XhrIo
         (str (:path opts) extension)
         (fn [e]
           (if (.isSuccess (.-target e))
             (cb {:lang (if (= extension ".js") :js :clj)
                  :source (.. e -target getResponseText)})
             (custom-load! opts (rest extensions) cb))))
       (catch js/Error _
         (custom-load! opts (rest extensions) cb)))
     (cb {:lang :clj :source ""}))))

(defn eval-forms [forms cb state current-ns custom-load]
  (let [opts {:eval js-eval
              :load custom-load
              :context :expr
              :def-emits-var true}
        channel (chan)
        forms (atom forms)
        results (atom [])]
    (go (while (seq @forms)
          (try
            (let [form (first @forms)
                  opts (assoc opts :ns @current-ns)]
              (when (list? form)
                (when (= 'ns (first form))
                  (reset! current-ns (second form))))
              (if (instance? js/Error form)
                (put! channel {:error form})
                (eval state form opts #(put! channel %))))
            (catch js/Error e (put! channel {:error e})))
          (swap! forms rest)
          (swap! results conj (<! channel)))
        (cb (mapv #(or (:error %) (:value %))
                  @results)))))

(defn str->form [s]
  (try
    (read-string s)
    (catch js/Error _)))

(defn wrap-macroexpand [form]
  (if (coll? form)
    (list 'macroexpand (list 'quote form))
    form))

(defn add-timeout-reset [form]
  (list 'do '(cljs.user/ps-reset-timeout!) form))

(defn add-timeout-checks [form]
  (if (and (seq? form) (= 'quote (first form)))
    form
    (let [form (walk add-timeout-checks identity form)]
      (if (and (seq? form) (= 'recur (first form)))
        (list 'do '(cljs.user/ps-check-for-timeout!) form)
        form))))

(defn add-timeouts-if-necessary [forms expanded-forms]
  (for [i (range (count forms))
        :let [expanded-form (get expanded-forms i)]]
    (if (and (coll? expanded-form)
             (contains? (set (flatten expanded-form)) 'recur))
      (add-timeout-reset (add-timeout-checks expanded-form))
      (get forms i))))

(defonce state (empty-state))

(defn code->results
  ([forms cb]
   (code->results forms cb {}))
  ([forms cb {:keys [custom-load current-ns]
              :or {current-ns (atom 'cljs.user)}}]
   (let [forms (mapv str->form forms)
         eval-cb (fn [results]
                   (cb results))
         read-cb (fn [results]
                   (eval-forms (add-timeouts-if-necessary forms results)
                     eval-cb
                     state
                     current-ns
                     custom-load))
         init-cb (fn [results]
                   (eval-forms (map wrap-macroexpand forms) read-cb state current-ns custom-load))]
     (eval-forms ['(ns cljs.user)
                  '(def ps-last-time (atom 0))
                  '(defn ps-reset-timeout! []
                     (reset! ps-last-time (.getTime (js/Date.))))
                  '(defn ps-check-for-timeout! []
                     (when (> (- (.getTime (js/Date.)) @ps-last-time) 2000)
                       (throw (js/Error. "Execution timed out."))))
                  '(set! *print-err-fn* (fn [_]))
                  (list 'ns @current-ns)]
       init-cb
       state
       current-ns
       custom-load))))

