(ns app.pages.collections.songs
  (:require [app.layouts.main :as main-layout]))

(defn -main-page
  []
  (main-layout/-main-layout
    "Songs" "Collection of songs."
    [[:h1 "Banger Certified Playlist"]
     [:p "In order to make things as simple as possible, I decided to just create playlists from music platforms since I am lazy to update the collection manually:"]
     [:h2 "Spotify"]
     [:p "Plenty of different song from countries like france, spain, indonesia, the states, etc."]
     [:p "I also have playlist for specific game soundtracks"]
     [:a {:href "https://open.spotify.com/user/btc3wj35zkps0xmca4k2164vd"} "https://open.spotify.com/user/btc3wj35zkps0xmca4k2164vd"]]))
