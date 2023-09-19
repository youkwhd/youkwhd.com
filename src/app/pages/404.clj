(ns app.pages.404
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:h1 "404 not found"]
       [:p "Page not found, either moved or not available. Consider going back to the "
        [:a {:href "/"} "Homepage"]
        "."]])))
