(ns app.core
  (:require [hiccup2.core :as h]
            [app.hiccup :as hc]
            [clojure.java.io :as io]
            [app.posts :as posts]
            [app.layouts.main :as main-layout]
            [app.pages.404 :as not-found-page]
            [app.pages.index :as index-page]
            [app.pages.art :as art-page]
            [app.pages.posts :as posts-page]
            [app.pages.collections.collections :as collections-page]
            [app.pages.collections.characters :as collections-characters-page]
            [app.pages.collections.mugshawtys :as collections-mugshawtys-page]
            [app.pages.collections.games :as collections-games-page]
            [app.pages.collections.movies :as collections-movies-page]
            [app.pages.collections.songs :as collections-songs-page]
            [app.pages.links :as links-page]))

(def TARGET-FOLDER-PATH "dist")

; TODO: refactor on multiple element rendering

(defn generate-404-page
  [dest-path]
  (spit
    (str dest-path "/404.html")
    (hc/gen-html5 (not-found-page/-main-page))))

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
          (hc/gen-html5 ((:page-component route))))))))

(defn -main
  []
  (generate-pages
    TARGET-FOLDER-PATH
    (concat
      [{:path "/"
        :page-component index-page/-main-page}
       {:path "/posts"
        :page-component posts-page/-main-page}
       {:path "/links"
        :page-component links-page/-main-page}
       {:path "/art"
        :page-component art-page/-main-page}
       {:path "/collections"
        :page-component collections-page/-main-page}
       {:path "/collections/characters"
        :page-component collections-characters-page/-main-page}
       {:path "/collections/mugshawtys"
        :page-component collections-mugshawtys-page/-main-page}
       {:path "/collections/games"
        :page-component collections-games-page/-main-page}
       {:path "/collections/movies"
        :page-component collections-movies-page/-main-page}
       {:path "/collections/songs"
        :page-component collections-songs-page/-main-page}]
      (get-posts-pages))))
