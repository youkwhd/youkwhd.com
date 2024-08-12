(ns app.pages.collections.songs
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    [[:h1 "Banger Certified Playlist"]
     [:p "In order to make things as simple as possible, I decided to just create playlists from music platforms since I am lazy to update the collection manually, which are:"]
     ; [:ul
     ;  (for [song data/SONGS]
     ;    [:li
     ;     [:a {:href (:url song) :target "_blank" :rel "noreferrer noopener"} (:name song)]])]
     [:h2 "Spotify"]
     [:p "Plenty of different song from countries like france, spain, indonesia, america, etc."]
     [:p "I also have playlist for specific game soundtracks"]
     [:a {:href "https://open.spotify.com/user/btc3wj35zkps0xmca4k2164vd"} "https://open.spotify.com/user/btc3wj35zkps0xmca4k2164vd"]
     [:h2 "Soundcloud"]
     [:p "Not much of a collection, mostly Indonesian DJs and some lo-fi songs"]
     [:a {:href "https://soundcloud.com/youkwhd/sets"} "https://soundcloud.com/youkwhd/sets"]]))
