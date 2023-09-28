(ns app.pages.collections.games
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [[:p "sorry migrating webpage, see:"]
       [:a
        {:href "https://github.com/youkwhd/youkwhd.com"}
        "Git Repo"]])))
