import Link from "next/link" 
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"

import _config from "@/src/config"
export const config = _config

export const getStaticProps = () => ({ props: { banners: getAllBanners(), posts: getAllPosts() }})

type Props = { posts: Post[], banners: Banner[] }
export default ({ posts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="blog posts"
            />
            <h1>blog posts</h1>
            <p>or you can <Link href={"/posts/tags"}>filter posts</Link> by tags</p>
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
