import games from "data/collections/games"
import movies from "data/collections/movies"
import songs from "data/collections/songs"

export type Collection = {
    name: string
    url: string
}

export type Collections = {
    games: Collection[]
    movies: Collection[]
    songs: {
        jedag_jedug: Collection[]
        latino: Collection[]
    }
}

export const collections = { games, movies, songs } as Collections
export default collections