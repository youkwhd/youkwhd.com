import Link from "next/link"
import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { type Banner as BannerT, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"

import { MainLayout as Layout } from "@/src/components/Layout"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = () => ({ props: { banners: getAllBanners(), posts: getAllPosts() }})

type Props = { posts: Post[], banners: BannerT[] }
export default ({ posts, banners }: Props): JSX.Element => {
    return (
        <Layout title={{ name: "youkwhd", image: "/images/dance.gif"}}>
            <NextSeo title="Homepage" description="Personal blog maintained by youkwhd" />

            <p>
                Hello, I'm a self-proclaimed software engineer, I reckon C as my language of choice, and Racket as one of my beloved languages. I love GNU/Linux and free open-source softwares.
            </p>
            <aside>
                <img src="/images/profile.jpeg" loading="lazy" alt="" width={131} height={140}/>
            </aside>
            <p>
                I adore the design of simple, easy to understand, and hackable softwares, as you can see yourself with the webpage you are currently visiting. It is simple and predictable, well might seem a bit odd because we are here at the modern era timeline, this isn't the oldschool web anymore.
            </p>
            <p>
                One thing this webpage doesn't have is dark mode, a valuable thing to have considering your eyes are burning seeing the light coming through the screen, luckily I don't need to implement one, because of the wide variety selection of web extension that transfroms bright sites.
            </p>
            <p>
                That would be one of the definition of simple, not just simple as in bare bone, but as customizeable and hackable product. You can change this site's css as you please and this webpage would just run as usual. Or, when you have some sort of text parser, it's function is just to parse out text, not to convert it into some kind of specific text format. Other software is responsible to create a builder to make out of the parser. The parser is considered simple and kept only one job.
            </p>
            <h2>Cars in favor</h2>
            <p>
                I really love cars, but I don't really have much of an experience with cars, except online. The only reason I do programming for paychecks are:
            </p>
            <ol>
                <li>
                    I want me to survive by eating
                </li>
                <li>
                    I need money to sustain me eating
                </li>
                <li>
                    Manual cars
                </li>
            </ol>
            <p>
                {/* TODO: */}
                I live far away from my hometown, the only relieable way to travel back to my hometown is via cars. I have seen people and also my family cruising with cars, I really really love this because they usually overtake other drivers in a 2 way lane with traffic and somewhat high speed.
            </p>
            <p>
                Yet no accidents were made by this <i>"wreckful"</i> driving, if you'd imagine so.
            </p>
            <img src="/images/sumatera.png" loading="lazy" alt="" width={436} height={242}/>
            <p>
                What you're seeing here is an <Link href="https://en.wikipedia.org/wiki/Toyota_Innova">Innova</Link> trying to overtake a motorcyle, also other cars. This is considered normal within the province. You see, the feeling when you hit the gas pedal and proceeds to overtake other cars is a blast.
            </p>
            <p>
                If you are intrested in this street race, so called. I'm sure that you can find some YouTube videos with the keyword <b>Lintas Sumatera</b>.
            </p>
            <p>
                I also love minibuses. These are services for traveling, they mostly operates in the nights. 2 of the most common ones:
            </p>
            <ul>
                <li>
                    <Link href="https://en.wikipedia.org/wiki/Toyota_HiAce">Toyota HiAce</Link>
                </li>
                <li>
                    <Link href="https://en.wikipedia.org/wiki/Mitsubishi_Delica">Mitsubishi L300</Link>
                </li>
            </ul>
            <h2>Music within the roads</h2>
            <p>
                It is not a travel if there's no music on, especially the old songs. Within hundreds of songs that i've heard, the most I like is <Link href="https://youtu.be/9iawLRB61Eo">Kaulah Segalanya</Link> by <Link href="https://www.discogs.com/artist/3609255-Ruth-Sahanaya">Ruth Sahanaya</Link>. This song is by far the most nostalgic song that would make me attached to the roads again. Other hits published by the same singer name like:
            </p>
            <ul>
                <li>
                    <Link href="https://youtu.be/4aj8zEEEXYg">Keliru</Link>
                </li>
                <li>
                    <Link href="https://youtu.be/GiGb9-PNRGA">Ingin Kumiliki</Link>
                </li>
            </ul>
            <p>
                If you're an Indonesian, and does not know about <Link href="https://www.iwanfals.co.id/article/our-story/53-biografi-iwan-fals">Iwan Fals</Link>, check em out.
            </p>
        </Layout>
    )
}
