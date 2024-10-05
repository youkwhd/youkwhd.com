(ns app.pages.collections.collections
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    "Collections" "Collection of stuff."
    [[:h1 "Collections"]
     [:p
      "These collections is meant to give out a taste of my old gems. It is not a complete list, I might forget some, but the list grows as time dies:"]
     [:ul
      [:li
       [:a {:href "/collections/games"} "Games"]]
      [:li
       [:a {:href "/collections/movies"} "Movies"]]
      [:li
       [:a {:href "/collections/songs"} "Songs"]]
      [:li
       [:a {:href "/collections/characters"} "Characters"]]] ]))
