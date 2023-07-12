import { PageConfig } from "next"
import Link from "next/link" 
import { NextSeo } from "next-seo"

import NavigationBar from "@/src/components/NavigationBar"

export const config: PageConfig = { unstable_runtimeJS: false }

type Collection = {
    name: string,
    url: string,
}

const collections: { games: Collection[], movies: Collection[] } = {
    games: [
        {
            name: "Albion Online",
            url: "https://albiononline.com/lore/history",
        },
        {
            name: "Devil May Cry 3",
            url: "https://www.devilmaycry.com/3",
        },
        {
            name: "Little Misfortune",
            url: "https://killmondaygames.com/little-misfortune/",
        },
        {
            name: "Harvest Moon: Hero of Leaf Valley",
            url: "https://en.wikipedia.org/wiki/Harvest_Moon:_Hero_of_Leaf_Valley",
        },
        {
            name: "Growtopia (during seth & hamumu era)",
            url: "https://growtopiagame.com/",
        },
        {
            name: "GTA San Andreas",
            url: "https://www.rockstargames.com/games/sanandreas",
        },
        {
            name: "The Warriors",
            url: "https://www.rockstargames.com/games/thewarriors",
        },
        {
            name: "Project Zomboid",
            url: "https://projectzomboid.com/",
        },
        {
            name: "Yu-Gi-Oh! Master Duel",
            url: "https://www.konami.com/yugioh/masterduel/us/en/",
        },
        {
            name: "Stardew Valley",
            url: "https://www.stardewvalley.net/",
        },
        {
            name: "Clue/Cluedo",
            url: "https://www.marmaladegamestudio.com/games/cluedo/",
        },
        {
            name: "The Long Dark",
            url: "https://www.thelongdark.com/",
        },
        {
            name: "Marc Eckō's Getting Up",
            url: "https://www.gettingup.com/",
        },
        {
            name: "MudRunner",
            url: "https://store.focus-entmt.com/us/product/637185/mudrunner",
        },
        {
            name: "My Summer Car",
            url: "http://www.amistech.com/msc/",
        },
        {
            name: "Need For Speed: Most Wanted",
            url: "https://www.ea.com/games/need-for-speed/need-for-speed-most-wanted-2005",
        },
        {
            name: "Need For Speed: Carbon",
            url: "https://www.ea.com/games/need-for-speed/need-for-speed-carbon",
        },
        {
            name: "Call of Duty 3",
            url: "https://callofduty.fandom.com/wiki/Call_of_Duty_3",
        },
        {
            name: "Fatal Frame II",
            url: "https://fatalframe.fandom.com/wiki/Fatal_Frame_II:_Crimson_Butterfly",
        },
        {
            name: "Crash Bandicoot Tag Team Racing",
            url: "https://en.wikipedia.org/wiki/Crash_Tag_Team_Racing",
        },
        {
            name: "Black",
            url: "https://www.ea.com/games/black",
        },
        {
            name: "God of War II",
            url: "https://godofwar.fandom.com/wiki/God_of_War_II",
        },
        {
            name: "Guitar Hero II",
            url: "https://guitarhero.fandom.com/wiki/Guitar_Hero_II",
        },
        {
            name: "Euro Truck Simulator 2",
            url: "https://eurotrucksimulator2.com/",
        },
        {
            name: "Shadow of the Colossus",
            url: "https://teamico.fandom.com/wiki/Shadow_of_the_Colossus",
        },
    ],
    movies: [
        {
            name: "50 First Dates",
            url: "https://www.rottentomatoes.com/m/50_first_dates",
        },
        {
            name: "Spirited Away",
            url: "https://www.rottentomatoes.com/m/spirited_away",
        },
        {
            name: "Kiki's Delivery Service",
            url: "https://www.rottentomatoes.com/m/kikis_delivery_service",
        },
        {
            name: "Fast And Furious: Tokyo Drift",
            url: "https://www.rottentomatoes.com/m/fast_and_the_furious_tokyo_drift",
        },
        {
            name: "Home Alone",
            url: "https://www.imdb.com/title/tt0099785/",
        },
        {
            name: "Home Alone 2",
            url: "https://www.imdb.com/title/tt0104431/",
        },
        {
            name: "Baby's Day Out",
            url: "https://www.imdb.com/title/tt0109190/",
        },
        {
            name: "Despicable Me",
            url: "https://www.rottentomatoes.com/m/despicable_me",
        },
        {
            name: "Deadpool",
            url: "https://www.marvel.com/movies/deadpool",
        },
        {
            name: "Deadpool 2",
            url: "https://www.marvel.com/movies/deadpool-2",
        },
        {
            name: "Spider-Man",
            url: "https://www.imdb.com/title/tt0145487/",
        },
        {
            name: "Spider-Man 2",
            url: "https://www.imdb.com/title/tt0316654/",
        },
        {
            name: "Spider-Man 3",
            url: "https://www.imdb.com/title/tt0413300/",
        },
        {
            name: "Kung Fu Hustle",
            url: "https://www.imdb.com/title/tt0373074/",
        },
        {
            name: "Samurai Champloo",
            url: "https://www.imdb.com/title/tt0423731/",
        },
        {
            name: "Devil May Cry: The Animated Series",
            url: "https://www.imdb.com/title/tt1048049/",
        },
        {
            name: "Rush Hour 3",
            url: "https://www.imdb.com/title/tt0293564/",
        },
        {
            name: "Pirates of The Caribbean",
            url: "https://www.imdb.com/list/ls023657263/",
        },
        {
            name: "Mr. Bean's Holiday",
            url: "https://www.imdb.com/title/tt0453451/",
        },
        {
            name: "Mrs. Harris Goes To Paris",
            url: "https://www.rottentomatoes.com/m/mrs_harris_goes_to_paris",
        },
        {
            name: "Mean Girls",
            url: "https://www.rottentomatoes.com/m/mean_girls",
        },
        {
            name: "Murder Mystery",
            url: "https://www.imdb.com/title/tt1618434/",
        },
        {
            name: "Murder Mystery 2",
            url: "https://www.imdb.com/title/tt15255288/",
        },
        {
            name: "Bean",
            url: "https://www.imdb.com/title/tt0118689/",
        },
        {
            name: "Harry Potter (Just for the sake of Snape)",
            url: "https://en.wikipedia.org/wiki/Harry_Potter_(film_series)",
        },
        {
            name: "Johnny English",
            url: "https://www.imdb.com/title/tt0274166/",
        },
        {
            name: "Johnny English Reborn",
            url: "https://www.imdb.com/title/tt1634122/",
        },
        {
            name: "Johnny English Strikes Again",
            url: "https://www.imdb.com/title/tt6921996/",
        },
        {
            name: "The Walking Dead S1 - S3",
            url: "https://www.imdb.com/title/tt1520211/",
        },
        {
            name: "The Promised Neverland S1",
            url: "https://www.imdb.com/title/tt8788458/",
        },
        {
            name: "Wednesday",
            url: "https://www.imdb.com/title/tt13443470/",
        },
        {
            name: "Queen's Gambit",
            url: "https://www.imdb.com/title/tt10048342/",
        },
    ]
}

export default (): JSX.Element => {
    return (
        <>
            <NextSeo
                title="collections"
            />
            <h1>Collections</h1>
            <NavigationBar />

            <p>
                These collections is meant to give out a taste of my old gems. It is not a complete list, I might forget some memories. This is essentially my journey, back when i was a kid, or, at most, a teenager.
            </p>

            <h2>Games</h2>
            <img src="images/carx_tandem.png" loading="lazy" alt="" width={300} height={533} />
            
            <p>
                I used to cruise in <Link href="https://carx-online.com/" target="_blank" rel="noreferrer noopener">CarX Drift Racing Online</Link> back when I still use my old laptop, since this game is the closest substitution to sim games like <Link href="https://assettocorsa.gg/" target="_blank" rel="noreferrer noopener">Assetto Corsa</Link> that can run <i>almost</i> smoothly on my current laptop at the time, though I need to set the graphics to the lowest.
            </p>

            <p>
                This is essentially how scuffed I could be, and how I desperately love cars. Based on the image above, I don't even render smokes.
            </p>

            <p>
                The fact that this game is one of the game that consumes my time, it does not mean that it deserves a spot on the great games list below:
            </p>

            <ul style={{ columnCount: 2 }} >
                {collections.games.map((game: Collection) => (
                    <li key={game.name}>
                        <Link href={game.url} target="_blank" rel="noreferrer noopener">
                            {game.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Movies</h2>
            <ul style={{ columnCount: 2 }} >
                {collections.movies.map((movie: Collection) => (
                    <li key={movie.name}>
                        <Link href={movie.url} target="_blank" rel="noreferrer noopener">
                            {movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
