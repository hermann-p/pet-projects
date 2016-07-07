(ns soccer.loading
  (:require [hipo.core :as hipo]
            [dommy.core :as dommy]
            [soccer.assets :refer [ready? percent-done]]
            [soccer.channels :refer [state-chan]]
            [cljs.core.async :refer [>!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn enter [state]
  (dommy/set-style! (:screen state) :top "10%")
  state)

(defn exit [state]
  (dommy/set-style! (:screen state) :top "-100%")
  state)

(defn tick [state]
  (dommy/set-attr! (:bar state) :value (percent-done))
  (if (ready?)
    (go (>! state-chan :play)))
  state)

(defn draw [state]
  state)

(defn mk-loading-screen []
  (dommy/append!
   (dommy/sel1 :body)
   (hipo/create [:span {:id "loadingScreen"}
                 [:progress {:value 0
                                :max 100
                                :id "loadingProgress"}]]))
  {:screen (dommy/sel1 :#loadingScreen)
   :bar (dommy/sel1 :#loadingProgress)})

(defn mk-state []
  (into (mk-loading-screen)
   {:enter enter
    :leave exit
    :time-tick tick
    :draw draw}))
