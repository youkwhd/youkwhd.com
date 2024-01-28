(ns app.pages.collections.mugshawtys
  (:require [app.layouts.main :as main-layout]
            [app.components.card :as card]
            [app.data.mugshawtys :as data]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "Mugshawtys"]
       [:div {:style "display: grid; row-gap: 35px; grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));"}
        (for [mugshawtys data/MUGSHAWTYS]
            (card/-main-component (:img-src mugshawtys) (:desc mugshawtys)))]])))

