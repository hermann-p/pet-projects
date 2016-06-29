(ns kicker.game
  (:require [cljs.core.async :as as :refer [chan <! >!]]
            [dommy.core :as dommy]
            [hipo.core :as hipo]
            [kicker.assets :as assets])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def state-channel (as/chan))
(def action-channel (as/chan 5))

(defonce g 9.81)
(defonce dt (/ 1 60)) ; trusting the browser to run us at aproximately 60fps

;;-------------------------------------------------------------------------------------------
;; Physics and mathematics stuff

(defn dist
  "Measure euclidian distance between elements a and b"
  [a b]
  (let [dx (- (:x a) (:x b))
        dy (- (:y a) (:y b))]
    (Math/sqrt (+ (* dx dx) (* dy dy)))))

(defn apply-gravity
  "Add gravity acceleration to y-speed"
  [ball]
  (update ball :vy + (* g dt)))

(defn update-pos
  "Apply speed vectors to ball"
  [ball]
  (-> (update ball :x + (* dt (:vx ball)))
      (update :y + (* dt (:vy ball)))))

(defn collision
  "When ball is in range of our foot, set its speed to the position
  difference vector"
  [{:keys [ball-size foot-size foot]} ball]
  (if (pos? (:vy ball))
    (let [min-dist (+ ball-size foot-size)
          cur-dist (dist foot ball)]
      (if (< cur-dist min-dist)
        (let [dx (- (:x ball) (:x foot))
              dy (- (:y ball) (:y foot))]
          (assoc ball :vx (* 20 dx) :vy (* 20 dy)))
        ball))
    ball))

(defn on-screen?
  "Is the ball still visible"
  [{:keys [x-tiles y-tiles] :as game} {:keys [x y]}]
  (every? true? [(< -1 x)
                 (< x (inc x-tiles))
                 ;(< -1 y)
                 (< y (inc y-tiles))]))

;;-------------------------------------------------------------------------------------------
;; Coordinate transformation functions

(defn to-screen [x y {:keys [x-tiles y-tiles]}]
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        sx (* x (/ width x-tiles))
        sy (* y (/ height y-tiles))]
    [sx sy]))

(defn to-game [x y {:keys [x-tiles y-tiles]}]
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        gx (* x (/ x-tiles width))
        gy (* y (/ y-tiles height))]
    [gx gy]))

;;-------------------------------------------------------------------------------------------
;; Action event handlers

(defmulti action first)

(defmethod action :startdrag [[_ x y] game]
  (action [:drag x y] (assoc game :dragging true)))

(defmethod action :enddrag [_ game]
  (assoc game :dragging false))

(defmethod action :move [[_ x y] game]
  (if (:dragging game)
    (action [:drag x y] game)
    game))

(defmethod action :drag
  ;; move foot to mouse position
  [[_ x y] game]
  (let [[nx ny] (to-game x y game)]
    (assoc game :foot (assoc (:foot game) :x nx :y ny))))

(defmethod action :add-ball
  ;; spawn a new ball at random position
  [v game]
  (update game :balls conj {:x (rand (:x-tiles game))
                            :y -1
                            :vx 0
                            :vy 0}))

;;-------------------------------------------------------------------------------------------
;; Drawing function

(defmulti state-change (fn [v _] v))

(defmethod state-change :loading-done [v game]
  (dommy/toggle! (dommy/sel1 :#loadingScreen) false)
  (assoc game :state :level))

(defn- get-state [game]
  (:state game))
(defmulti draw get-state)
(defmulti time-tick get-state)

(defmethod draw :loading
  [game]
  (if-let [overlay (dommy/sel1 :#loadingScreen)]
    (do
      (dommy/show! overlay)
      (dommy/set-attr! (dommy/sel1 :#progressbar) :value (assets/percent-done)))
    (let [overlay (hipo/create [:div {:id "loadingScreen"} [:font {:size "5vw"} "Loading..."]])
          progressbar (hipo/create [:meter {:value 0 :max 100 :id "progressbar"}])]
      (dommy/set-style! progressbar :position "absolute" :bottom "0" :left "5%" :width "90%")
      (dommy/set-style! overlay
                        :background-color "#aaaaaa"
                        :z "999"
                        :position "absolute"
                        :top "0" :left "0"
                        :width "100%"
                        :height "100%"
                        :text-align "center")
      (dommy/append! overlay progressbar)
      (dommy/append! (dommy/sel1 :body) overlay)))
  game)

(defmethod time-tick :loading [game]
  (println (assets/percent-done) "loaded")
  (if (assets/ready?)
    (go (>! state-channel :loading-done)))
  game)

;;-------------------------------------------------------------------------------------------
;; Play

(defmethod draw :level
  [{:keys [s x-tiles y-tiles foot balls] :as game}]
  (let [ctx (.getContext (dommy/sel1 :canvas) "2d")
        [foot-x foot-y] (to-screen (:x foot) (:y foot) game)
        ball-size (* (:ball-size game) s)
        foot-size (* (:foot-size game) s)]
;;    (set! (.-fillStyle ctx) "#AAAAFF")
;;    (.fillRect ctx 0 0 (.-innerWidth js/window) (.-innerHeight js/window))
    (let [background-image (assets/get-asset :img :test)
          ball-image (assets/get-asset :img :ball)
          foot-image (assets/get-asset :img :foot)]
      (.drawImage ctx background-image
                  0 0 (.-innerWidth js/window) (.-innerHeight js/window))

      (.drawImage ctx foot-image
                  (int (- foot-x foot-size)) (int (- foot-y foot-size))
                  (* 2 foot-size) (* 2 foot-size))
      
      ;; (set! (.-fillStyle ctx) "#000000")
      ;;    (doto ctx
      ;;      (.beginPath)
      ;;      (.arc (int foot-x)
      ;;            (int foot-y)
      ;;            foot-size 0 (* 2 Math/PI))
      ;;      (.fill))
      
      ;; (set! (.-fillStyle ctx) "#FFFFFF")
      (doseq [ball balls]
        (let [[x y] (to-screen (:x ball) (:y ball) game)]
          (.drawImage ctx ball-image
                      (int (- x ball-size)) (int (- y ball-size))
                      (* 2 ball-size) (* 2 ball-size))
          ;;        (doto ctx
          ;;          (.beginPath)
          ;;          (.arc (int x) (int y) ball-size 0 (* 2 Math/PI))
          ;;          (.fill))
          )))))


(defmethod time-tick :level
;  "Advance the game one frame"
  [{:keys [s] :as game}]
  (if (zero? (mod (:time game) (:spawn-every game)))
    (go (>! action-channel [:add-ball])))
  (-> (update game :time inc)
      (assoc :balls
             (filter (partial on-screen? game)
                     (map          ; chain: gravity + detect collision + move
                      (comp (partial collision game) update-pos apply-gravity)
                      (:balls game))))))
