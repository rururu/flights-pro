(ns osm.data
(:require clojure.xml))

(def DATA (volatile! []))
(def OSM-API "http://api.openstreetmap.org/api/0.6/map")
(defn tag-tags-namcor [tag]
  (let [cnt (:content tag)
       tt (filter #(= (:tag %) :tag) cnt)
       m {"id" (:id (:attrs tag))
             "lat" (read-string (:lat (:attrs tag)))
             "lon" (read-string (:lon (:attrs tag)))}
       ml (cons m (map #(assoc {} (:k (:attrs %)) (:v (:attrs %))) tt))]
  (apply merge ml)))

(defn osm-data
  ([[lat lon] rad]
  (let [d (/ rad 60)
         bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]]
    (osm-data bbx)))
([bbx]
  (try
    (let [[w s e n] bbx
           curl (str OSM-API "?bbox=" w "," s "," e "," n)
           xml (clojure.xml/parse curl)
           cnt (:content xml)
           nods (filter #(= (:tag %) :node) cnt)
           nnn (filter #(some? (:content %)) nods)]
        (vreset! DATA (map tag-tags-namcor nnn)))
    (catch Exception e
      (println e)
      nil))))

(defn filter-k [k data]
  (filter #(some? (get % k)) data))

(defn filter-kv [k v data]
  (filter #(= (get % k) v) data))

(defn filter-kv-not [k v data]
  (filter #(not= (get % k) v) data))

(defn tags [data]
  (sort (set (mapcat keys data))))

(defn tag-stat []
  (let [sta (for [t (tags @DATA)]
	(let [fl (filter-k t @DATA)]
	  [t (count fl)]))
        sta  (filter #(> (second %) 0) sta)]
  (sort second sta)))

