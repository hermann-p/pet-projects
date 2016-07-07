(ns soccer.gamestate)

(defn draw [game]
  (let [state (:cur-state game)]
    ((get-in game [state :draw]) (state game))))

(defn time-tick [game]
  (let [state (:cur-state game)]
    (update-in game [state] (get-in game [state :time-tick]))))

(defn enter [game state-kw]
  (println "gamestate/enter" state-kw)
  (if-let [cur-state (:cur-state game)]
    (-> (update-in game [cur-state] (or (get-in game [cur-state :leave]) identity))
        (#(update-in % [state-kw] (or (get-in % [state-kw :enter]) identity)))
        (assoc :cur-state state-kw))))
