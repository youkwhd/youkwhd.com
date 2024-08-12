(ns app.layouts.main
  (:require [app.components.head :as head]
            [app.components.header :as header]
            [app.components.footer :as footer]))

(defn -main-layout
  ;; TODO: description from layout
  [components]
  ;; TODO: add !DOCTYPE html
  [:html
   (head/-main-component "youkwhd" "youkwhd's page")
   [:body
    (header/-main-component)
    [:main (for [component components]
             component)]
    (footer/-main-component)]])
