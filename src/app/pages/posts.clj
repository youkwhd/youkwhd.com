(ns app.pages.posts
  (:require [app.layouts.main :as main-layout]
            [app.posts :as posts]))

(defn -main-page
  []
  (main-layout/-main-layout
    [[:h1 "Posts"]
     [:ul {:class "post--list"}
      (let [posts (sort-by
                    #(:date (:metadata %))
                    #(compare %2 %1)
                    (map (fn
                           [post]
                           (update-in post [:metadata]
                                      assoc :date (.parse (java.text.SimpleDateFormat. "dd-MM-yy") (:date (:metadata post)))))
                         (posts/get-posts-metadata "./src/posts")))]
        (for [post posts]
          [:li
           [:a {:href (str "/posts/" (:filename post))}
            (:title (:metadata post))]
           [:br]
           [:small (:description (:metadata post))]]))]]))
