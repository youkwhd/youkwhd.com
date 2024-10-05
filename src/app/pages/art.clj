(ns app.pages.art
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    "Art" "Collection of Arts."
    [[:h1 "Art"]
     [:p
      "I like to draw, was."]
     [:img
      {:src "images/art_gundam.jpeg"
       :loading "lazy" 
       :alt "" 
       :width "300" 
       :height "533"}]
     [:p
      "This gundam art is essentially a copy from an image of gundam in real life, this art was made with an iPhone."]
     [:p "With the second version having colors:"]
     [:img
      {:src "images/art_gundam_colored.png"
       :loading "lazy" 
       :alt "" 
       :width "300" 
       :height "533"}]
     [:p
      "That \"ywk\" is a signature that this piece was made by me, youkwhd. I honestly like the gundam without proper hands, for some reason. It might be my weird taste on art."]]))
