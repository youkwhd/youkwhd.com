(ns app.components.header)

;; TODO: don't know how to create constants
(defn navigations
  []
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
  (let [navigations (navigations)
        -elements (map-indexed 
                    (fn [idx navigation]
                      ; TODO: refactor (need to return multiple elements)
                      (vector [:a {:href (:to navigation)}
                               (:label navigation)]
                              (when (not= idx (- (count navigations) 1))
                                [:span "•"])))
                    navigations)]
    [:header [:h1 "youkwhd"]
     [:nav 
      (for [elements -elements]
        (for [element elements]
          element))]])
  )
