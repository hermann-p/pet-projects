(ns soccer.play
  (:require [soccer.channels :as chans]
            [cljs.core.async :refer [>!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn time-step [game]
  game)
(defn enter [game]
  game)
(defn leave [game]
  game)
(defn draw [game]
  game)

(defn mk-state [container]
  (into container {:enter enter
                   :leave leave
                   :time-tick time-step
                   :draw draw}))
