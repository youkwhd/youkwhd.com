(ns app.layouts.main
  (:require [app.components.head :as head]
            [app.components.header :as header]
            [app.components.footer :as footer]))

(defn -main-layout
  [title description components]
  ;; TODO: add !DOCTYPE html
  [:html
   (head/-main-component title description)
   [:body
    (header/-main-component)
    [:main (for [component components]
             component)]
    (footer/-main-component)]])
