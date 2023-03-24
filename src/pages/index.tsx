import Link from "next/link"
import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = () => ({ props: { banners: getAllBanners(), posts: getAllPosts() }})

type Props = { posts: Post[], banners: Banner[] }
export default ({ posts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="homepage"
                description="a personal blog maintained by youkwhd, contents are mostly about GNU/Linux or programming."
            />
            <h1>youkwhd</h1>
            <p>
                Hello, I'm a self-proclaimed software engineer, I reckon C as my language of choice, and Racket as one of my beloved languages.
            </p>
            <p>
                I adore the design of simple, easy to understand, and hackable softwares, as you can see yourself with the webpage you are currently visiting. It is simple and predictable, well might seem a bit odd because we are here at the modern era timeline, this isn't the oldschool web anymore.
            </p>
            <p>
                One thing this webpage doesn't have is a dark mode, a valuable thing to have considering your eyes are burning seeing the light coming through the screen, luckly I don't need to implement one, because of the wide variety selection of web extension that transfroms bright sites. That, was the definition of simple, having the information that we don't need to implement something that has been implemented before, there's nothing wrong to do so for learning purposes, but if you did it for real, you are just wasting time and resulted in a over engineered site.
            </p>
            <p>
                Most importantly, I love GNU/Linux and free open-source softwares.
            </p>
            <aside>
                <img className="blobfish-img" src="/images/ship2.jpg" alt="blobfish" />
            </aside>
            <h2>Resources Around</h2>
            <ul>
                <li><Link href="/posts">Blog Posts</Link>, All the articles I have written on this webpage.</li>
            </ul>
            <h2>Softwares</h2>
            <ul>
                <li>
                    <Link href={"https://github.com/youkwhd/TUNE-CWE-315"} target="_blank">TUNE-CWE-315</Link> (2023) - Demonstrates plain-text cookie vulnerability.
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/termstory"} target="_blank">termstory</Link> (2023) - Terminal text adventure game generator written in Racket.
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/twrap"} target="_blank">twrap</Link> (2022) - A simple utility to wrap characters and or a clone of fold(1).
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/libtmdb"} target="_blank">libtmdb</Link> (2022) - API Wrapper of the TMDb written for C.
                </li>
            </ul>
            <h2>Small Components</h2>
            <ul>
                <li>
                    <Link href={"https://github.com/youkwhd/fe.infinite-scroll"} target="_blank">fe.infinite-scroll</Link> (2023) - Demonstrates on how to create an infinite API calls while scrolling, using the IntersectionObserver API with Svelte.
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/fe.dropdown"} target="_blank">fe.dropdown</Link> (2023) - Implements dropdown navbar using Next.js.
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/fe.list"} target="_blank">fe.list</Link> (2023) - Dead simple list animation.
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/fs.jwt"} target="_blank">fe.jwt</Link> (2023) - Showcases on using JWT as an authorization tool, using express as the server
                </li>
                <li>
                    <Link href={"https://github.com/youkwhd/be.sql"} target="_blank">be.sql</Link> (2023) - Kickstart on how to use SQL in general, uses Flask as server.
                </li>
            </ul>
        </>
    )
}
