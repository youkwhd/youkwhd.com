(ns app.core
  (:require [hiccup2.core :as h]
            [app.hiccup :as hc]
            [app.rss :as rss]
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
            [app.pages.collections.yugioh :as collections-yugioh-page]
            [app.pages.links :as links-page]))

(def TARGET-FOLDER-PATH "dist")

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
            :page-component (main-layout/-main-layout
                              (:title (:metadata (:md post))) (:description (:metadata (:md post)))
                              [[:h1 (:title (:metadata (:md post)))]
                               (h/raw (:html (:md post)))])})
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
          (hc/gen-html5 (:page-component route)))))))

(defn -main
  [& args]
  (let [start-time (. System (nanoTime))
        calculate-elapsed (some #{"--elapsed"} args)]
    (generate-pages
      TARGET-FOLDER-PATH
      (concat
        [{:path "/"
          :page-component (index-page/-main-page)}
         {:path "/posts"
          :page-component (posts-page/-main-page)}
         {:path "/links"
          :page-component (links-page/-main-page)}
         {:path "/art"
          :page-component (art-page/-main-page)}
         {:path "/collections"
          :page-component (collections-page/-main-page)}
         {:path "/collections/characters"
          :page-component (collections-characters-page/-main-page)}
         {:path "/collections/games"
          :page-component (collections-games-page/-main-page)}
         {:path "/collections/movies"
          :page-component (collections-movies-page/-main-page)}
         {:path "/collections/yugioh"
          :page-component (collections-yugioh-page/-main-page)}
         {:path "/collections/songs"
          :page-component (collections-songs-page/-main-page)}]
        (get-posts-pages)))
    (spit (str TARGET-FOLDER-PATH "/rss.xml")
          (rss/generate (posts/get-posts-metadata "./src/posts")))
    ;; stolen from time macro
    (when calculate-elapsed
      (println (str "  elapsed " (/ (double (- (. System (nanoTime)) start-time)) 1000000000.0) " secs")))))
