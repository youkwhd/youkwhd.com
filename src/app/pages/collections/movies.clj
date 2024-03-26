(ns app.pages.collections.movies
  (:require [app.layouts.main :as main-layout]
            [app.data.movies :as data]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "Movies"]
       [:ul {:style "column-count: 2"}
        (for [movie data/MOVIES]
          [:li
           [:a {:href (:url movie)} (:name movie)]])]
       [:small "18/7/2023:"]
       [:p "Just finished Made in Abyss Season 1, I really really recommend you to watch it. One of the best executed anime along with Samurai Champloo and Spirited Away."]
       [:p "The opening, style, story, ending, eveything is great about this anime, highly recommend."]
       [:small "26/3/2024:"]
       [:p "I finished Frieren, beautiful story telling, whoever writes the story definitely knows how the world cycles."]])))
