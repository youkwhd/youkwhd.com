import games from "data/collections/games"
import movies from "data/collections/movies"

export type Collection = {
    name: string
    url: string
}

export type Collections = {
    games: Collection[]
    movies: Collection[]
}

export const collections = { games, movies } as Collections
export default collections