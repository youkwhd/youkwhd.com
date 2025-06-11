(ns app.pages.collections.movies
  (:require [app.layouts.main :as main-layout]
            [app.data.movies :as data]))

(defn -main-page
  []
  (main-layout/-main-layout
    "Movies" "Collection of movies."
    [[:h1 "Movies"]
     [:ul {:style "column-count: 2"}
      (for [movie data/MOVIES]
        [:li
         [:a {:href (:url movie)} (:name movie)]])]
     [:small "18/7/2023:"]
     [:p "Just finished Made in Abyss Season 1, I really really recommend you to watch it. One of the best executed anime along with Samurai Champloo and Spirited Away."]
     [:p "The opening, style, story, ending, eveything is great about this anime, highly recommend."]
     [:small "26/3/2024:"]
     [:p "I finished Frieren, beautiful story telling, whoever writes the story definitely knows how the world cycles."]
     [:small "9/5/2024:"]
     [:p "Emily in Paris is a great Netflix series, I'm laughing out loud eveytime Luc is on screen."]
     [:small "11/6/2025:"]
     [:p "When is the last time I write here? look at that time gap. I guess time just flew over, and this is the perfect timing to watch a series."]
     [:p "I finished The Residence, it was an amazing series that has similar tone like the movie Knives Out, and particularly the game Clue/Cluedo. I'm talking about the settings of the crime scene (at a big mansion), and how clues peeled layer by layer."]
     [:p "You might wanna hear this song—this has nothing to do with the serie, but—it's so soothing for a mystery-like settings: " [:a {:href "https://www.youtube.com/watch?v=bHsO8LZTEUM&list=PLdt9eadG8k_ese2F2WzXFSQrB12G5c9PG"} "Clue/Cluedo OST"] "."]
     [:p "NOTE: at this time of reviewing, there's only one season, so.. the series might lean over to a more less polished mystery case. Anyway, highly recommend if you're into murder mysteries."]]))
