(ns app.pages.collections.games
  (:require [app.layouts.main :as main-layout]
            [app.data.games :as data]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "Games"]
       [:img {:src "/images/carx_tandem-compressed.webp" :width "300" :height "533"}]
       [:p "I used to cruise in " [:a {:href "https://carx-online.com/" :target "_blank" :rel "noreferrer noopener"} "CarX Drift Racing Online"] " back when I still use my old laptop, since this game is the closest substitution to sim games like " [:a {:href "https://assettocorsa.gg/" :target "_blank" :rel "noreferrer noopener"} "Assetto Corsa"] " that can run " [:i "almost"] " smoothly on my current laptop at the time, though I need to set the graphics to the lowest."]
       [:p "This is essentially how scuffed I could be, and how I desperately love cars. Based on the image above, I don't even render smokes."]
       [:ul {:style "column-count: 2"}
        (for [game data/GAMES]
          [:li
           [:a {:href (:url game) :target "_blank" :rel "noreferrer noopener"} (:name game)]])]])))
