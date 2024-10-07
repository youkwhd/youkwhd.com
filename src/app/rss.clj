(ns app.rss
  (:require [clojure.string :as string]))

(defn generate
  [posts-metadata]
  (string/join "\n"
    (concat
      ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
       "<rss version=\"2.0\">"
       "  <channel>"
       "    <title>youkwhd's blog</title>"
       "    <description>Posts about Tech / Software Development</description>"
       "    <link>https://youkwhd.com/posts</link>"
       "  </channel>"]
      (map #(str
              "  <item>\n"
              "    <title>" (:title (:metadata %)) "</title>\n"
              "    <description>" (:description (:metadata %)) "</description>\n"
              "    <link>https://youkwhd.com/posts/" (:filename %) "</link>\n"
              "  </item>")
           posts-metadata)
      ["</rss>"])))
