import games from "data/collections/games"
import movies from "data/collections/movies"
import songs from "data/collections/songs"

import type { Song } from "data/collections/songs"
export type { Song } from "data/collections/songs"

export type Collection = {
    name: string
    url: string
}

export type Collections = {
    games: Collection[]
    movies: Collection[]
    songs: {
        jj: Song
        latino: Song
    }
}

export const collections = { games, movies, songs } as Collections
export default collections