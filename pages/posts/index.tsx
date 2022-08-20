import { PageConfig } from "next"
import Link from "next/link" 
import { NextSeo } from "next-seo"

import { getAllPosts } from "@/utils/getPosts"
import { getAllBanners } from "@/utils/getBanners"
import type { Post, Banner } from "@/types"
import { MainLayout } from "@/components/Layout"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = () => {
    return {
        props: {
            posts: getAllPosts(),
            banners: getAllBanners()
        },
    }
}

type Props = { posts: Post[], banners: Banner[] }
const PostsPage = ({ posts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="blog posts"
            />
            <MainLayout banners={banners}>
                <h1>blog posts:</h1>
                <ul>
                    {posts.map((post: Post) => {
                        const parsedPostDate: string = post.date.split("T")[0]

                        return (
                            <li key={post.slug}>
                                <span>{parsedPostDate} - </span>
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
