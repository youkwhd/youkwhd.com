import Link from "next/link"
import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"

export const config: PageConfig = {
    unstable_runtimeJS: false
}

export const getStaticProps = () => {
    const posts: Post[] = getAllPosts()
    const banners: Banner[] = getAllBanners()

    const uniqueTags: { [key: string]: string } = {}
    posts.forEach((post: Post) => {
        for (const key in post.tags) {
            uniqueTags[key] = post.tags[key]
        }
    })

    return {
        props: {
            tags: uniqueTags,
            banners
        },
    }
}

type Props = { tags: { [key: string]: string }, banners: Banner[] }
export default ({ tags, banners }: Props): JSX.Element => {
    const arrTags: [string, string][] = Object.entries(tags).sort(([_key1, val1], [_key2, val2]) => val1 > val2 ? 1 : -1)

    return (
        <>
            <NextSeo
                title="list of topics"
            />
            <h1>available list of topics:</h1>
            <ul>
                {arrTags.map(([key, val]) => {
                    return (
                        <li key={val}>
                            <Link as={`/posts/tags/${key}`} href="/posts/tags/[tag]">
                                {val}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
