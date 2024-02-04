(ns app.pages.index
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:img
        {:src "/images/profile-compressed.webp"
         :alt "" 
         :width "120" 
         :height "120" 
         :class "image-float"}]
       [:p
        "I'm a Software Engineer, I reckon C as my language of choice, and "
        [:a
         {:href "https://racket-lang.org/"
          :target "_blank"
          :rel "noopener noreferrer"}
         "Racket"] 
        " as one of my beloved languages."]
       [:p
        "I adore the design of simple, and hackable softwares. I prefer to use and contribute to "
        [:a
         {:href "https://www.wordnik.com/words/libre"
          :target "_blank"
          :rel "noopener noreferrer"} 
         "libre"] 
        " open-sourced softwares."]
       [:h2 "Cars In Favor"]
       [:p
        "I live far away from my hometown, the only relieable way to travel back and forth to my hometown is via cars, this is one of the reason why I like cars, and music."]
       [:p
        "Most are cruising with somewhat high speed, and the tension when trying to overtake other cars just rocks, considering that we are trying to overtake with medium to high traffic from the opposite direction."]
       [:img
        {:src "/images/sumatera-compressed.webp"
         :alt "" 
         :width "436" 
         :height "243"}]
       [:br]
       [:small
        "An "
        [:a
         {:href "https://en.wikipedia.org/wiki/Toyota_Innova"
          :target "_blank"
          :rel "noopener noreferrer"}
         "Innova"] 
        " trying to overtake a motorcyle, also other cars."]
       [:p
        "If you are intrested in this street race, so called. I'm sure that you can find some YouTube videos with the keyword "
        [:b "Lintas Sumatera"] 
        "."]
       [:p
        "–"
        [:a
         {:href "https://www.youtube.com/watch?v=NrxxZRJaxYc&t=443s"
          :target "_blank"
          :rel "noopener noreferrer"}
         "Here"]
        ", I'll do you a favor. Just so you know, the car that's used in the video is Daihatsu Rocky, and the the car that's leading the run is an older generation of Innova."]
       [:p "If the video didn't get skipped to 7:23, Please do so."]
       [:p
        "I also love minibuses. These are services for traveling, they mostly operates in the nights. 2 of the most common ones:"]
       [:ul
        [:li
         [:a
          {:href "https://en.wikipedia.org/wiki/Toyota_HiAce#Fifth_generation_(H200;_2004)"}
          "Toyota HiAce"]]
        [:li
         [:a
          {:href "https://en.wikipedia.org/wiki/Mitsubishi_Delica#Asia"}
          "Mitsubishi L300"]]]
       [:h2 "Music Within The Roads"]
       [:p
        "It is not considered a travel if there's no music on, especially the old ones. Within hundreds of songs that i've heard, the most I like is "
        [:a {:href "https://youtu.be/9iawLRB61Eo"} "Kaulah Segalanya"]
        " by "
        [:a
         {:href "https://www.discogs.com/artist/3609255-Ruth-Sahanaya"}
         "Ruth Sahanaya"]
        ". This song is by far the most nostalgic song that would make me attached to the roads again."]
       [:p "Other hits published by the same singer:"]
       [:ul
        [:li [:a {:href "https://youtu.be/4aj8zEEEXYg"} "Keliru"]]
        [:li [:a {:href "https://youtu.be/GiGb9-PNRGA"} "Ingin Kumiliki"]]]
       [:p
        "If you're an Indonesian, and does not know "
        [:a
         {:href
          "https://www.iwanfals.co.id/article/our-story/53-biografi-iwan-fals"}
         "Iwan Fals"] 
        ", check em out."]])))
