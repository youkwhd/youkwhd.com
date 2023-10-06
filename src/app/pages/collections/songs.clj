(ns app.pages.collections.songs
  (:require [app.layouts.main :as main-layout]
            [app.data.songs :as data]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "Banger Certified Playlist"]
       [:ul
        (for [song data/SONGS]
          [:li
           [:a {:href (:url song) :target "_blank" :rel "noreferrer noopener"} (:name song)]])]])))
