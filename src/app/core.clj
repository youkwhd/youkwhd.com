(ns app.core
  (:require [hiccup2.core :as h]
            [app.pages.index :as index-page]))

(defn -main
  []
  (println "Hello, Clojure & JVM")
  (println 
    (str
      (h/html
        (index-page/-main-page)))))
