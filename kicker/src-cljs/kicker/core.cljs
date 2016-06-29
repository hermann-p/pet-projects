(ns kicker.core
  (:require [dommy.core :as dommy]
            [hipo.core :as hipo]
            [cljs.core.async :as as :refer [chan >! <!]]
            [kicker.game :as game]
            [kicker.assets :as assets])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop alt!]]))

(def mouse-channel (as/chan 10))
(def time-channel (as/chan 2))
(def state-channel game/state-channel)
(def action-channel game/action-channel)

(defn timestamp []
  (.getTime (js/Date.)))

(defn resize
  "Recalculate display scaling"
  [{:keys [x-tiles y-tiles] :as game}]
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        scale (min (/ width x-tiles)
                   (/ height y-tiles))]
    (.log js/console "Scaling to:" scale)
    (dommy/set-attr! (dommy/sel1 :canvas) :width width)
    (dommy/set-attr! (dommy/sel1 :canvas) :height height)
    (assoc game :s scale)))

(defn init []
  "Create canvas"
  (dommy/append! (dommy/sel1 :body)
                 (->
                  (hipo/create [:canvas "Update your browser. Really!"])
                  (dommy/set-style! :position "fixed"
                                    :top "0"
                                    :left "0"
                                    :background-color "blue")))
  "Register event listeners"
  (dommy/listen! (dommy/sel1 :canvas) :touchmove
                 #(go (>! mouse-channel [:drag (.-clientX %) (.-clientY %)])))
  (dommy/listen! (dommy/sel1 :canvas) :mousedown
                 #(go (>! mouse-channel [:startdrag (.-clientX %) (.-clientY %)])))
  (dommy/listen! (dommy/sel1 :canvas) :mouseup
                 #(go (>! mouse-channel [:enddrag (.-clientX %) (.-clientY %)])))
  (dommy/listen! (dommy/sel1 :canvas) :mousemove
                 #(go (>! mouse-channel [:move (.-clientX %) (.-clientY %)])))
  (dommy/listen! js/window :resize
                 #(go (>! state-channel :resize)))
  "Create new game"
  (resize {:state :loading
           :dragging false
           :time 0
           :spawn-every (* 60 3)
           :x-tiles 16
           :y-tiles 12
           :mouse-down false
           :ball-size 0.5
           :foot-size 0.7
           :balls []
           :foot {:x 8 :y 6}}))

(defn tick-the-clock
  "Send an 'time for a new frame' message to the time channel"
  []
  (go (>! time-channel [:tick])))

"Run the game"
(go-loop [game (init)]
  (let [[value ch] (alts! [mouse-channel time-channel state-channel action-channel])]
    (cond
      (= time-channel ch)
      (do
        (.requestAnimationFrame js/window tick-the-clock)
        (game/draw game)
        (recur (game/time-tick game)))
      
      (= state-channel ch)
      (cond
        (= :resize value)
        (recur (resize game))

        :default
        (recur (game/state-change value game)))

      :default
      (recur (game/action value game)))))

"Start the first frame"
(tick-the-clock)

(assets/request :img :test "http://www.blendernation.com/wp-content/uploads/2013/01/Soccer_Arena_01.jpeg")
(assets/request :img :ball "http://images.clipartpanda.com/soccer-ball-clipart-no-background-nTX8RoMTB.png")
(assets/request :img :foot "http://www.clker.com/cliparts/4/m/m/a/z/6/track-hi.png")
(assets/load)
