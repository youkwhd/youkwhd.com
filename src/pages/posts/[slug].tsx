import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { getAllPosts, getPostBySlug } from "@/utils/post"
import { getAllBanners } from "@/utils/banner"
import { markdownToHTML } from "@/utils/markdown"

import type { Post, Banner } from "@/types"
import { MainLayout } from "@/src/components/Layout"

export const config: PageConfig = { unstable_runtimeJS: false }

type Params = { params: { slug: string } }
export const getStaticProps = async ({ params }: Params) => {
    const postKeys: Post = getPostBySlug(params.slug)
    const content: string = await markdownToHTML(postKeys.content || "")
    const banners: Banner[] = getAllBanners()

    return {
        props: {
            post: {
                ...postKeys,
                content,
            },
            banners
        },
    }
}

export const getStaticPaths = () => {
    const posts: Post[] = getAllPosts()

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

type Props = { post: Post, banners: Banner[] }
export default ({ post, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title={post.title.toLowerCase()}
                description={post.excerpt}
            />
            <MainLayout banners={banners}>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </MainLayout>
        </>
    )
}

