;; mugshot card (see pages/collections/mugshawtys.clj)
(ns app.components.card)

(defn -main-component
  [size force-size centered-desc image-src description]
  [:div {:style (str "width: " size "px;" (if centered-desc " text-align: center;" ""))}
    [:img {:src image-src
           :width size
           :height size
           :style (if force-size (str "object-fit: contain; " "width: " size "px;" " height: " size "px;") "")}]
    [:br]
    [:small description]])
