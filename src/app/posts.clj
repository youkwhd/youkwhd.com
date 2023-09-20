(ns app.posts
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [markdown.core :as markdown]))

(defn get-posts
  [posts-dir-path]
  (let [files (.listFiles (io/file posts-dir-path))]
    (map (fn [parsed-file]
           {:md (markdown/md-to-html-string-with-meta (:fcontent parsed-file))
            :filename (:filename parsed-file)})
         (map (fn [file]
                (let [filename (.getName file)]
                  {:filename (subs filename 0 (string/index-of filename "."))
                   :fcontent (slurp file)}))
              files))))
