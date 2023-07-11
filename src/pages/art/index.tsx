import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import NavigationBar from "@/src/components/NavigationBar"

export const config: PageConfig = { unstable_runtimeJS: false }

export default (): JSX.Element => {
    return (
        <>
            <NextSeo
                title="art"
            />
            <h1>Art</h1>
            <NavigationBar />

            <p>I like to draw, was. I remembered that i used to draw things after my brain randomly gave me flashbacks of an old image of my drawing:</p>
            <img src="images/art_gundam.jpeg" alt="" width={300} height={533} />
            <p>This gundam art is essentially a copy from an image of gundam in real life, this art was made with an iphone.</p>
            <p>With the second version having colors:</p>
            <img src="images/art_gundam_colored.png" alt="" width={300} height={533} />
            <p>That "ywk" is a signature that this piece was made by me, youkwhd. I honestly like the gundam without proper hands, for some reason. It might be my weird taste on art.</p>
        </>
    )
}
