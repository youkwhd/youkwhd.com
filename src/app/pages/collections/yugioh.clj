(ns app.pages.collections.yugioh
  (:require [app.layouts.main :as main-layout]
            [app.data.yugioh :as data]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "Collection of Great Yu-Gi-Oh! Artworks"]
       ; [:p "Bunch of great Yu-Gi-Oh! card artworks"]
       (for [collection data/AWESOME-ARTWORK-CARDS]
         (concat
           [[:h2 (:archetype collection)] [:p (:desc collection)]]
           (for [card-img-url (:cards collection)]
                [:img {:style "margin: 0px 5px 5px 0px"
                       :src card-img-url
                       :width 128}])))])))
