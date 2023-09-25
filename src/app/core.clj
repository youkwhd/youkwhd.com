(ns app.core
  (:require [hiccup2.core :as h]
            [clojure.java.io :as io]
            [app.posts :as posts]
            [app.layouts.main :as main-layout]
            [app.pages.404 :as not-found-page]
            [app.pages.index :as index-page]
            [app.pages.art :as art-page]
            [app.pages.posts :as posts-page]
            [app.pages.links :as links-page]))

; TODO: refactor on multiple element rendering

(defn generate-404-page
  [dest-path]
  (spit
    (str dest-path "/404.html")
    (str (h/html (not-found-page/-main-page)))))

(defn get-posts-pages
  []
  (let [posts (posts/get-posts "./src/posts")]
    (map (fn
           [post]
           {:path (str "/posts/" (:filename post))
            :page-component (fn
                              []
                              (main-layout/-main-layout
                                (fn
                                  []
                                  [[:h1 (:title (:metadata (:md post)))]
                                   (h/raw (:html (:md post)))])))})
         posts)))

(defn generate-pages
  [dest-path routes]
  (let [dest-path (str "./" dest-path)]
    (.mkdir (io/file dest-path))
    (generate-404-page dest-path)
    (doseq [route routes]
      (let [page-path (str dest-path (:path route))]
        (.mkdir (io/file page-path))
        (spit
          (str page-path "/index.html")
          (str (h/html ((:page-component route)))))))))

(defn -main
  []
  (generate-pages
    "dist"
    [{:path "/"
      :page-component index-page/-main-page}
     {:path "/posts"
      :page-component posts-page/-main-page}
     {:path "/links"
      :page-component links-page/-main-page}
     {:path "/art"
      :page-component art-page/-main-page}])
  (generate-pages 
    "dist"
    (get-posts-pages)))