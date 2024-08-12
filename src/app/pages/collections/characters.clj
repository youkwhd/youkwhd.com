(ns app.pages.collections.characters
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    [[:h1 "Quick look at fiction characters"]
     [:p "Here are all my loved models of \"Characters\" collection. Most of these will be chunky looking models from various shows, anime, video games, etc."]
     [:p "I like the use of staff-like weapons, bazooka (like Lady from DMC), ebony & ivory, dante's sword, and just generally heavy things."]
     [:h2 "RX-78GP02A Gundam \"Physalis\""]
     [:p "This is the only Gundam that I like the most. It has realistic machine-looking Gundam that resembles the old famous Gundam model. It is chunky.. that is why I like this model."]
     [:img {:src "/images/collections/gundam_physalis.jpeg" :width "245" :height "323"}]
     [:br]
     [:small "Heavy Mobile Gundam RX-78GP02A"]
     [:p "This Gundam is built to have a field of weapons. And the most noticeable one is the Bazooka, it is a nuclear weapon. Altough the use of nuclear is forbidden, the Bazooka is fired once in the anime series."]
     [:h2 "Grock, Codename: Rhino"]
     [:img {:src "/images/collections/grock2.jpeg" :width "367.5" :height "206.5"}]
     [:br]
     [:small "Grock (underdog Tank) from MLBB - Rhino EPIC Skin"]
     [:p "This, I have not much to say. This character is from a mobile MOBA game called Mobile Legends: Bang Bang, which is very popular in Southeast Asia. I played this character because I honestly love it's aesthetics (and.. because I got this skin for free)."]
     [:h2 "Meteonis Drytron"]
     [:p "The best generic engine of a ritual deck currently in the game. Altough it is not that strong in the current META. Most importantly, Drytron as a deck is flexible."]
     [:img {:src "/images/collections/meteonis_drytron.jpg" :width "397" :height "223"}]
     [:br]
     [:small "Metenonis Drytron from Yu-Gi-Oh!"]
     [:p "One of my favorite deck in Yu-Gi-Oh. These type of character is big, which is why I like. It is also a machine. This is just majestic, the blue color, the pose, everything about this deck is fire."]]))
