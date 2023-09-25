(ns app.posts
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [clygments.core :as clygments]
            [markdown.core :as markdown]))

(defn get-posts
  [posts-dir-path]
  (let [files (.listFiles (io/file posts-dir-path))]
    (map (fn [file]
           (let [filename (.getName file)
                 filecontent (slurp file)]
             {:md (markdown/md-to-html-string-with-meta
                    filecontent
                    :code-style #(str "class=\"language-" % "\"")
                    :codeblock-no-escape? true
                    :codeblock-callback (fn [code lang]
                                          (clygments/highlight code lang :html {:nowrap true
                                                                                :style "inkpot"
                                                                                :noclasses true})))
              :filename (subs filename 0 (string/index-of filename "."))}))
         files)))
