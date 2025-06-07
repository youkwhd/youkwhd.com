(ns app.pages.collections.pokemons
  (:require [app.layouts.main :as main-layout]
            [app.components.card :as card]
            [app.data.pokemons :as data]))

(def POKEMON-CARD-SIZE 131) ;; px
(def TRAINERS-CARD-SIZE 131) ;; px

(defn -main-page
  []
  (main-layout/-main-layout
    "Pokémon" "Collection of Pokémons."
    [[:h1 "Pokémons"]
     [:div {:style (str "display: grid; row-gap: 35px; grid-template-columns: repeat(auto-fit, minmax(" POKEMON-CARD-SIZE "px, 1fr));")}
      (for [pokemon data/POKEMONS]
        (card/-main-component POKEMON-CARD-SIZE true true (str "https://www.smogon.com/dex/media/sprites/xy/" (clojure.string/lower-case (:name pokemon)) ".gif") (:name pokemon)))]
     [:h1 "Trainers / Gym Leaders"]
     [:div {:style (str "display: grid; row-gap: 35px; grid-template-columns: repeat(auto-fit, minmax(" TRAINERS-CARD-SIZE "px, 1fr));")}
      (for [trainer data/TRAINERS]
        (for [sprite (:sprites trainer)]
          (card/-main-component TRAINERS-CARD-SIZE true true sprite (:name trainer))))]]))
