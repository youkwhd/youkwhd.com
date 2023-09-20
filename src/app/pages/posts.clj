(ns app.pages.posts
  (:require [app.layouts.main :as main-layout]
            [app.posts :as posts]
            [hiccup2.core :as h]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "Posts"]
       [:ul {:class "post--list"}
        (for [post (posts/get-posts "./src/posts")]
          [:li
           [:a {:href (str "/posts/" (:filename post))}
            (:title (:metadata (:md post)))]
           [:br]
           [:small (:description (:metadata (:md post)))]])]])))
