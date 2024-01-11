(ns app.components.footer)

(defn -main-component
  []
  [:footer
   [:hr]
   [:div
    {:class "footer--wrapper"}
    [:small
     "This site is licensed under "
     [:a
      {:href
       "https://raw.githubusercontent.com/youkwhd/youkwhd.com/master/COPYING",
       :target "_blank", 
       :rel "noopener noreferrer"} 
      "AGPL v3"]]
    [:small " | "]
    [:small "See "
     [:a
      {:href
       "https://github.com/youkwhd/youkwhd.com",
       :target "_blank", 
       :rel "noopener noreferrer"} 
      "source code"]
     " of this site"]
    [:small " | "]
    [:small "Sign "
     [:a
      {:href
       "#",
       ; :target "_blank", 
       ; :rel "noopener noreferrer"
       } 
      "Guestbook"]
     " ❗"]
    [:small " | "]
    [:small "팬케이크 YWK"]
    ]])
