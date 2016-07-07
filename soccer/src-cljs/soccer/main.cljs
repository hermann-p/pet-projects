(ns soccer.main
  (:require [soccer.assets :refer [load request request-all]]
            [soccer.loading :as loading]
            [soccer.play :as play]
            [soccer.pixi :as pixi]))

(defn init []
  (request-all {:img [{:id :evilos :url "imgs/evilos.jpg"}]})
  (load)

  {:loading (loading/mk-state)
   :play (play/mk-state (pixi/mk-view (.-innerWidth js/window) (.-innerHeight js/window)))
   :cur-state :loading})
