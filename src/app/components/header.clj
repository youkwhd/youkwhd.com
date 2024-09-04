(ns app.components.header)

(def navigations
  [{:label "Home"
    :to "/"}
   {:label "Posts"
    :to "/posts"}
   {:label "Collections"
    :to "/collections"}
   {:label "Links"
    :to "/links"}])

(defn -main-component
  []
  (let [-navigations (map-indexed 
                   (fn [idx navigation]
                     [[:a {:href (:to navigation)}
                       (:label navigation)]
                      (when (not= idx (- (count navigations) 1))
                        [:span "•"])])
                   navigations)]
    [:header
     [:h1
      [:a {:href "/" :class "color-white"}
         "youkwhd"]]
     [:nav 
      (for [nav -navigations]
        (seq nav))]]))
