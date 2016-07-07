(ns soccer.core
  (:require [soccer.pixi :refer [mk-view]]
            [soccer.assets :refer [load load-asset mk-sprite]]
            [soccer.channels :as chans]
            [soccer.main :as game]
            [soccer.gamestate :refer [draw time-tick enter]]
            [cljs.core.async :refer [chan >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(defonce pixi js/PIXI)

(go (>! chans/state-chan :loading))

(defn request-frame []
  (go (>! chans/time-chan :tick)))

(go-loop [game (game/init)]
  (let [[val ch] (alts! [chans/state-chan
                         chans/time-chan
                         chans/event-chan
                         chans/global-chan])]
    (cond
      (= chans/time-chan ch)
      (do (.requestAnimationFrame js/window request-frame)
          (draw game)
          (recur (time-tick game)))

      (= chans/state-chan ch)
      (recur (enter game val)))))

(request-frame)
