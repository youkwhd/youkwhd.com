(ns app.pages.collections.mugshawtys
  (:require [app.layouts.main :as main-layout]
            [app.components.card :as card]
            [app.data.mugshawtys :as data]))

(def MUGSHAWTY-CARD-SIZE 196) ;; px

(defn -main-page
  []
  (main-layout/-main-layout
    "Mugshawtys" "Collection of mugshawtys."
    [[:h1 "Mugshawtys"]
     [:div {:style (str "display: grid; row-gap: 35px; grid-template-columns: repeat(auto-fit, minmax(" MUGSHAWTY-CARD-SIZE "px, 1fr));")}
      (for [mugshawtys data/MUGSHAWTYS]
        (card/-main-component MUGSHAWTY-CARD-SIZE false false (:img-src mugshawtys) (:desc mugshawtys)))]]))
