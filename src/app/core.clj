(ns app.core
  (:require [hiccup2.core :as h]
            [app.hiccup :as hc]
            [app.rss :as rss]
            [clojure.java.io :as io]
            [app.posts :as posts]
            [app.layouts.main :as main-layout]))

(def TARGET-FOLDER-PATH "dist")

(defn get-posts-pages
  []
  (let [posts (posts/get-posts "./src/posts")]
    (map (fn
           [post]
           {:path (str "/posts/" (:filename post))
            :page-component (main-layout/-main-layout
                              (:title (:metadata (:md post))) (:description (:metadata (:md post)))
                              [[:h1 (:title (:metadata (:md post)))]
                               (h/raw (:html (:md post)))])})
         posts)))

(defn get-pages-namespaces
  []
  (let [base-dir (io/file "./src/app/pages")
        base-path (.getCanonicalPath base-dir)
        ns-prefix "app.pages."]
    (letfn [(get-files [dir]
              (let [files (.listFiles dir)]
                (mapcat (fn [f]
                          (if (.isDirectory f)
                            (get-files f)
                            [f]))
                        files)))]
      (map (fn [f]
             (let [rel-path (-> (.getCanonicalPath f)
                                (.substring (+ (count base-path) 1)))
                   ns-part  (-> rel-path
                                (clojure.string/replace #"[\\/]" ".")
                                (clojure.string/replace #"\.clj$" ""))]
               (str ns-prefix ns-part)))
           (get-files base-dir)))))

(defn generate-pages
  [dest-path routes]
  (let [dest-path (str "./" dest-path)]
    (.mkdirs (io/file dest-path))
    (doseq [route routes]
      (let [page-path (str dest-path (:path route))]
        (cond
          ;; TODO: idk, deal with this, see the -main fn
          (clojure.string/ends-with? page-path ".html") (spit page-path (hc/gen-html5 (:page-component route)))
          :else (do
            (.mkdirs (io/file page-path))
            (spit
              (str page-path "/index.html")
              (hc/gen-html5 (:page-component route)))))))))

(defn -main
  [& args]
  (let [start-time (. System (nanoTime))
        calculate-elapsed (some #{"--elapsed"} args)]
    (generate-pages
      TARGET-FOLDER-PATH
      (concat
        (map (fn [namespace]
               (require (symbol namespace))
               (let [ns-suffix (subs namespace (count "app.pages."))
                     page-component-func ((ns-resolve (symbol namespace) (symbol "-main-page")))
                     page-uri-path (cond
                                (= ns-suffix "404") "/404.html"
                                :else (let [path (str "/" (clojure.string/replace ns-suffix #"\." "/"))]
                                        (if (clojure.string/ends-with? path "index")
                                          (subs path 0 (- (count path) (count "index")))
                                          path)))]
                 {:path page-uri-path
                  :page-component page-component-func}))
             (get-pages-namespaces))
        (get-posts-pages)))
    (spit (str TARGET-FOLDER-PATH "/rss.xml")
          (rss/generate (posts/get-posts-metadata "./src/posts")))
    ;; stolen from time macro
    (when calculate-elapsed
      (println (str "  elapsed " (/ (double (- (. System (nanoTime)) start-time)) 1000000000.0) " secs")))))
