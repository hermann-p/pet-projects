(ns soccer.channels
  (:require [cljs.core.async :refer [chan]]))

(defonce state-chan (chan))
(defonce event-chan (chan 3))
(defonce time-chan (chan 3))
(defonce global-chan (chan 1))
