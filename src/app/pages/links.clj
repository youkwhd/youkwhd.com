(ns app.pages.links
  (:require [app.layouts.main :as main-layout]))

(def banners
  [{:src "/images/banners/4gentoo.png"
    :url "https://wiki.installgentoo.com/wiki/Main_Page"}
   {:src "/images/banners/landchad.png"
    :url "https://landchad.net"}
   {:src "/images/banners/wiby.gif"
    :url "http://wiby.me"}])

(defn -main-page
  []
  (main-layout/-main-layout
    (fn
      []
      [
       [:h1 "Other Pages"]
       (for [banner banners]
         [:a {:href (:url banner)
              :target "_blank"
              :rel "noopener noreferrer"
              :class "anchor-no-decor"}
          [:img {:src (:src banner)
                 :alt ""
                 :width "81px"
                 :height "31px"}]
          "\n"])])))
