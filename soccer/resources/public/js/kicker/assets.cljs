(ns kicker.assets
  (:require [hipo.core :as hipo]
            [cljs.core.async :refer [<! take!]]
            [dommy.core :as dommy]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defonce pixi js/PIXI)
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
        loaded (count-loaded)]
    (if-not (zero? total)
      (* 100 (/ loaded total))
      100)))

(defn ready? []
  (= (count-requested) (count-loaded)))

(defn asset-error! [type-key id]
  (println "Could not load" (if (= type-key :img) "image" "sound") id)
  (swap! assets #(assoc % type-key (dissoc (type-key @assets) id))))

(defn request [type-key id url]
  (swap! url-list #(conj % {:type-key type-key :id id :url url})))

;; (defn load-img [id url]
;;   (let [img (hipo/create [:img {:src url}])]
;;     (dommy/listen-once! img :load (fn [] (swap! assets #(assoc-in % [:img id :ready] true))))
;;     (dommy/listen-once! img :error (asset-error! :img id))
;;     (swap! assets #(assoc-in % [:img id] {:data img}))))

(defn load-img [id url]
  (swap! assets #(assoc-in % [:img id] {:data nil}))
  (-> pixi.loader
      (.add (name id) url)
      (.load
       (fn []
         (let [texture (.-texture (aget (.-resources pixi.loader) (name id)))]
           (swap! assets #(assoc-in % [:img id] {:ready true
                                                 :data texture})))))))


(defn load-sound [id url]
  (swap! assets #(assoc-in % [:snd id] {:data nil}))
  (go
    (let [ctx (:audio-ctx @assets)
          response (<! (http/get url {:response-type :array-buffer}))]
      (if (= 200 (:status response))
        (.decodeAudioData ctx (:body response)
                          (fn [buffer] (swap! assets #(assoc-in % [:snd id] {:data buffer
                                                                             :ready true})))
                          (fn []
                            (println "Error decoding" url)
                            (asset-error! :snd id)))
        (do (println "Error loading" url)
            (asset-error! :snd id))))))

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
    (println "No" (if (= type-key :image) "image" "sound") "named" id "loaded!")))

(defn mk-sprite [id]
  (pixi.Sprite. (get-asset :img id)))

(defn play-sound [id]
  (if-let [sound (get-in @assets [:snd id :data])]
    (let [ctx (:audio-ctx @assets)
          src (.createBufferSource ctx)]
      (set! (.-buffer src) sound)
      (doto src
        (.connect (.-destination ctx))
        (.start 0)))))
