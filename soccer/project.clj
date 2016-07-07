(defproject kicker "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [prismatic/dommy "1.1.0"]
                 [hipo "0.5.2"]
                 [cljs-http "0.1.41"]
                 [org.clojure/core.async "0.2.374"]]
  :plugins [[lein-cljsbuild "1.1.0"]]

  :cljsbuild {
    :builds {
             :dev {
                   :source-paths ["src-cljs"]
                   :compiler {:output-to "resources/public/js/cljs.js"
                              :output-dir "resources/public/js"
                              :optimizations :none
                              :pretty-print false
                              :source-map "resources/public/js/cljs.js.map"}}
             :prod {
                    :source-paths ["src-cljs"]
                    :compiler {:output-to "resources/public/js-min/cljs-min.js"
                               :output-dir "resources/public/js-min"
                               :optimizations :advanced
                               :pretty-print false
                               :source-map "resources/public/js-min/cljs-min.js.map"}}}})
