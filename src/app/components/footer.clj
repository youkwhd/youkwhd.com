(ns app.components.footer)

(defn -main-component
  []
  [:footer
   [:hr]
   [:div
    {:class "footer--wrapper"}
    [:small
     "This site is licensed under"
     [:a
      {:href
       "https://raw.githubusercontent.com/youkwhd/youkwhd.com/master/COPYING",
       :target "_blank", 
       :rel "noopener noreferrer"} 
      "AGPL v3"] 
     "."]]])
