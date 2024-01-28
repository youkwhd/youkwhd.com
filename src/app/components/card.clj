;; mugshot card (see pages/collections/mugshawtys.clj)
(ns app.components.card)

(defn -main-component
  [image-src description]
  [:div {:style "width: 192px;"}
    [:img {:src image-src
           :width 192
           :height 192}]
    [:br]
    [:small description]])
