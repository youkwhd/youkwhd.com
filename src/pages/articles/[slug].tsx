import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts, getPostBySlug } from "@/lib/post"
import { markdownToHTML } from "@/lib/markdown"

import { MainLayout as Layout } from "@/src/components/Layout"

export const config: PageConfig = { unstable_runtimeJS: false }

type Params = { params: { slug: string } }
export const getStaticProps = async ({ params }: Params) => {
    const post: Post = getPostBySlug(params.slug)
    const html: string = await markdownToHTML(post.content)
    const banners: Banner[] = getAllBanners()

    return {
        props: {
            post: {
                ...post,
                content: html,
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
        <Layout title={{ name: post.title }}>
            <NextSeo
                title={post.title.toLowerCase()}
                description={post.excerpt}
            />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Layout>
    )
}

