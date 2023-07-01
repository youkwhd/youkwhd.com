import { PageConfig } from "next"
import Link from "next/link" 
import { NextSeo } from "next-seo"

import NavigationBar from "@/src/components/NavigationBar"

export const config: PageConfig = { unstable_runtimeJS: false }

const data = {
    games: [
        "Albion Online",
        "Devil May Cry 3",
        "Harvest Moon: Hero of Leaf Valley",
        "Growtopia",
        "GTA San Andreas",
        "The Warriors",
        "Project Zomboid",
        "Yu-Gi-Oh! Master Duel",
        "Stardew Valley",
        "Cluedo",
        "The Long Dark",
        "Marc Eckō's Getting Up",
        "Mud Runner",
        "My Summer Car",
        "Need For Speed: Carbon",
        "Midnight Club",
        "Call of Duty",
        "Fatal Frame II",
        "Crash Bandicoot",
        "Black",
        "God of War II",
        "Guitar Hero II",
        "Euro Truck Simulator 2",
        "Shadow of the Colossus",
    ],
    movies: [
        "50 First Dates",
        "Spirited Away",
        "Kiki's Delivery Service",
        "Fast And Furious: Tokyo Drift",
        "Home Alone",
        "Home Alone 2",
        "Baby's Day Out",
        "Despicable Me",
        "Deadpool",
        "Deadpool 2",
        "Kung Fu Hustle",
        "Samurai Champloo",
        "Devil May Cry Animated Series",
        "Rush Hour *",
        "Pirates of The Caribbean",
        "Mr. Bean's Holiday",
        "Mrs. Harris Goes To Paris",
        "Mean Girls",
        "Murder Mystery",
        "Murder Mystery 2",
        "Bean",
        "Harry Potter (Snape)",
        "Johnny English",
        "The Walking Dead S1",
        "The Promised Neverland S1",
        "Wednesday",
        "Queen's Gambit",
    ],
}

export default (): JSX.Element => {
    return (
        <>
            <NextSeo
                title="Collections"
            />
            <h1>Collections</h1>
            <NavigationBar />

            <p>These collections is meant to give out a taste of my old gems. It is not a complete list, I might forget some memories.</p>

            <h2>Games</h2>
            <p>Spent the most time with</p>
            <ul>
                {data.games.map((game: string) => (
                    <li>
                        <Link href="#">
                            {game}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Movies</h2>
            <p>Greatest movies I have ever watched</p>
            <ul>
                {data.movies.map((movie: string) => (
                    <li>
                        <Link href="#">
                            {movie}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
