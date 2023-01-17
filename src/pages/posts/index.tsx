import { PageConfig } from "next"
import Link from "next/link" 
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"
import { MainLayout } from "@/src/components/Layout"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = () => ({ props: { banners: getAllBanners(), posts: getAllPosts() }})

type Props = { posts: Post[], banners: Banner[] }
const PostsPage = ({ posts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="blog posts"
            />
            <MainLayout banners={banners}>
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
            </MainLayout>
        </>
    )
}

export default PostsPage
