(ns app.core
  (:require [hiccup2.core :as h]
            [clojure.java.io :as io]
            [app.pages.index :as index-page]
            [app.pages.404 :as not-found-page]
            [app.pages.art :as art-page]))

; TODO: refactor on multiple element rendering

(defn generate-404-page
  [dest-path]
  (spit
    (str dest-path "/404.html")
    (str (h/html (not-found-page/-main-page)))))

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
     ; {:path "/links"
     ;  :page-component links-page/-main-page}
     {:path "/art"
      :page-component art-page/-main-page}]))
