(ns app.components.head)

(defn -main-component 
  [title description]
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width,initial-scale=1"}]
   [:link {:rel "icon"
           :type "image/x-icon"
           :href "/favicon.ico"}]

   ;; CSS Links
   [:link {:rel "stylesheet"
           :type "text/css"
           :href "/noto-serif.css"}]
   [:link {:rel "stylesheet"
           :type "text/css"
           :href "/global.css"}]

   ;; Primary Meta Tags
   [:title title]
   [:meta {:name "title"
           :content title}]
   [:meta {:name "description"
           :content description}]])
