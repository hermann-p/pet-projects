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
    ;(println "Req:" total "loaded:" loaded "Percentage:" r)
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


(defn load-img [id url]
  (let [img (hipo/create [:img {:src url}])]
    (dommy/listen-once! img :load (partial load-success :img id))
    (swap! assets #(assoc-in % [:img id] {:data img
                                          :ready false}))))

(defn load-sound [id url]
  (swap! assets #(assoc-in % [:snd id] {:data nil
                                        :ready false}))
  (let [ctx (:audio-ctx @assets)
        request (js/XMLHttpRequest.)]
    (.open request "GET" url true)
    (set! (.-responseType request) "arraybuffer")
    (dommy/listen-once! request :load
                        (fn []
                          (.decodeAudioData ctx (.-response request)
                                            (fn [buffer] (swap! assets #(assoc-in % [:snd id] {:data buffer
                                                                                               :ready true})))
                                            (fn []
                                              (js/alert "Error loading" url)))))
    (.send request)))

(defn load-asset [{:keys [type-key id url]}]
  (if-not (get-in @assets [type-key id])
    (case type-key
      :img (load-img id url)
      :snd (load-sound id url))))

(defn load []
  (swap! assets #(assoc % :audio-ctx (or (js/AudioContext.) (js/webkitAudioContext.))))
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

(defn play-sound [id]
  (if-let [sound (get-in @assets [:snd id :data])]
    (let [ctx (:audio-ctx @assets)
          src (.createBufferSource ctx)]
      (set! (.-buffer src) sound)
      (prn src)
      (doto src
        (.connect (.-destination ctx))
        (.start 0)))))
