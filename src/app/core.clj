(ns app.core
  (:require [hiccup2.core :as h]
            [app.pages.index :as index-page]
            [app.pages.art :as art-page]))

(defn generate-pages
  [dest-path routes]
  (let [dest-path (str "./" dest-path)]
    (.mkdir (java.io.File. dest-path))
    (doseq [route routes]
      (let [page-path (str dest-path (:path route))]
        (.mkdir (java.io.File. page-path))
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
