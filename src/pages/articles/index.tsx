import { PageConfig } from "next"
import Link from "next/link" 
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"

import NavigationBar from "@/src/components/NavigationBar"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = () => ({ props: { banners: getAllBanners(), posts: getAllPosts() }})

type Props = { posts: Post[], banners: Banner[] }
export default ({ posts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="Articles"
            />
            <h1>Documents</h1>
            <NavigationBar />
            <p>Here are articles I write:</p>
            <ul>
                {posts.map((post: Post) => {
                    return (
                        <li key={post.slug}>
                            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}