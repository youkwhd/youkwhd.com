import Link from "next/link"
import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import type { Banner } from "@/src/types"
import { MainLayout } from "@/src/components/Layout"
import { getAllBanners } from "@/utils/getBanners"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = () => ({ props: { banners: getAllBanners() }})

type Props = { banners: Banner[] }
export default ({ banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="homepage"
                description="a personal blog maintained by youkwhd, contents are mostly about GNU/Linux or programming."
            />
            <MainLayout banners={banners}>
                <h1 className="__fake_h2">Introducing youkwhd</h1>
                <p>
                    I'm an undergraduate student majoring Computer Science, a fast paced self-taught programmer <Link href={"/posts/majoring-compsci-yet-self-taught"} target="_blank" style={{ fontSize: 14 }}>[1]</Link> who's proficient using C99 & Typescript as a language of choice, utilizing Neovim as an efficient text editor for every day use.
                </p>
                <p>
                    With the mention of Neovim, thus can be summarized that i am in fact a GNU/Linux enthusiast. I prefer to use a non PID1 systemd based systems. Most of my softwares are purely Libre.
                </p>
                <h2>Writing articles</h2>
                <p>
                    The only reason why this site is here is because of me wanting to write articles. Be aware that each and every articles are written based on my experience. You can find my 
                    articles by either:
                </p>
                <ol>
                    <li><Link href={"/posts"}>Inspecting every articles</Link></li>
                    <li><Link href={"/posts/tags"}>Checking all the available tags/topics</Link></li>
                </ol>
                <p>
                    Thank you for the visit, this site is free from Javascript.
                </p>
                <h2>Chat with me</h2>
                <p>
                    Please contact me via email, the address is <Link href={"mailto:lolywk@tutanota.com"}>lolywk@tutanota.com</Link>,
                    grab my <Link href={"/pgp-public-key"}>pgp public key</Link> for convenience.
                </p>
            </MainLayout>
        </>
    )
}
