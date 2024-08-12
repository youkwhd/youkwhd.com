(ns app.pages.collections.collections
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    [[:h1 "Collections"]
     [:p
      "These collections is meant to give out a taste of my old gems. It is not a complete list, I might forget some memories. This is essentially my journey, back when i was a kid, or, at most, a teenager."]
     [:p
      "If you are bored or something like that, I hope this list can help you to find temporary happiness or even better. Anyway, here are the collections:"]
     [:ul
      [:li
       [:a {:href "/collections/games"} "games"]]
      [:li
       [:a {:href "/collections/movies"} "movies"]]
      [:li
       [:a {:href "/collections/songs"} "songs"]]]
     [:p "Ah yes, please take a look at my collection of " [:a {:href "/collections/characters"} "fiction characters"] ". Great masterpieces, also the " [:a {:href "/collections/mugshawtys"} "mugshawty"] " shots collection, and some finest " [:a {:href "/collections/yugioh"} "Yu-Gi-Oh! cards"] " ever printed."]]))
