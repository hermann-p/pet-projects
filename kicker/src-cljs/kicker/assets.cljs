(ns kicker.assets
  (:require [hipo.core :as hipo]
            [dommy.core :as dommy]))

(enable-console-print!)

(defonce url-list (atom []))
(defonce assets (atom {}))   ;; yes... we want the assets as mutables

(defn count-requested []
  (+ (count (or (:img @assets) []))
     (count (or (:snd @assets) []))))

(defn count-loaded []
  (letfn [(is-ready? [[k v]] (:ready v))]
    (+ (count (filter is-ready? (:img @assets)))
       (count (filter is-ready? (:snd @assets))))))

(defn percent-done []
  (let [total (count-requested)
        loaded (count-loaded)
        r (if-not (zero? total)
            (* 100 (/ loaded total))
            100)]
    (println "Req:" total "loaded:" loaded "Percentage:" r)
    r))

(defn ready? []
  (= (count-requested) (count-loaded)))

(defn load-success [type-key id & args]
  (swap! assets #(assoc-in % [type-key id :ready] true))
  (let [total (count-requested)
        ready (count-loaded)
        fraction (/ ready total)]
    (println type-key " " id " loaded (" (* 100 fraction) "% ready)")))

(defn- type-tag [type-key]
  (case type-key
    :img :img
    :snd :audio))

(defn request [type-key id url]
  (swap! url-list #(conj % {:type-key type-key :id id :url url})))

(defn load-asset [{:keys [type-key id url]}]
  (if-not (contains? @assets id)
    (let [asset (hipo/create [(type-tag type-key) {:src url}])]
      (dommy/listen-once! asset :load (partial load-success type-key id))
      (dommy/listen-once! asset :error
                          (fn [& args]
                            (swap! assets #(assoc-in % [type-key id :data] nil))
                            (println "ERROR:" id url "could not be loaded")))
      (swap! assets #(assoc-in % [type-key id] {:data asset
                                                :ready false})))))

(defn load []
  (doseq [asset @url-list]
    (load-asset asset)))

(defn request-all [reqmap]
  (assert (map? reqmap) "Expected asset map {:type [{:id ... :url ...} ...]}")
  (doseq [img (:img reqmap)]
    (load-asset {:type-key :img :id (:id img) :url (:url img)}))
  (doseq [snd (:snd reqmap)]
    (load-asset {:type-key :snd :id (:id snd) :url (:url snd)})))

(defn get-asset [type-key id]
  (if-let [asset (get-in @assets [type-key id :data])]
    asset
    (println "No" type-key "named" id "loaded!")))
