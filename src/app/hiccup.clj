(ns app.hiccup
  (:require [hiccup2.core :as h]))

(defn gen-html5
  [hiccup]
  (str
    "<!DOCTYPE html>"
    (h/html hiccup)))
