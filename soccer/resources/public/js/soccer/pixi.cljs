(ns soccer.pixi
  (:require [dommy.core :as dommy]))

(defonce pixi js/PIXI)

(defn mk-view [width height]
  (let [renderer (pixi.autoDetectRenderer width height)
        stage (pixi.Container.)]
    (set! (.-autoResize renderer) true)
    (dommy/append! (dommy/sel1 :body) (-> (.-view renderer)
                                          (dommy/set-attr! :id "canvas")
                                          (dommy/set-style! :position "absolute" :top "0px" :left "0px")))
    {:renderer renderer
     :stage stage}))
