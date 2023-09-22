(ns app.posts
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [markdown.core :as markdown]))

(defn get-posts
  [posts-dir-path]
  (let [files (.listFiles (io/file posts-dir-path))]
    (map (fn [file]
           (let [filename (.getName file)
                 filecontent (slurp file)]
             {:md (markdown/md-to-html-string-with-meta
                    filecontent
                    :code-style #(str "class=\"language-" % "\""))
              :filename (subs filename 0 (string/index-of filename "."))}))
         files)))
