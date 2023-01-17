import Link from "next/link"
import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { type Banner, getAllBanners } from "@/lib/banner"
import { type Post, getAllPosts } from "@/lib/post"
import { MainLayout } from "@/src/components/Layout"

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
            <MainLayout banners={banners}>
                <h1 className="title">youkwhd</h1>
                <p>
                    welcome to my webpage, i reckon c as my language of choice, and racket as one of my beloved languages.
                </p>
                <aside>
                    <img src="/images/ship2.jpg" alt="blobfish" height={181} />
                </aside>
                <h2>web links</h2>
                <ul>
                    <li><Link href={"/posts"}>blog posts</Link>, all the articles i've wrote</li>
                    <li><Link href={"https://github.com/youkwhd"} target="_blank">git repository</Link>, fortunately i use github</li>
                </ul>
                <h2>latest posts</h2>
                <ul>
                    {posts.slice(0, 3).map((post: Post) => {
                        return (
                            <li key={post.slug}>
                                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                                    {post.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <h2>softwares & libraries</h2>
                <ul>
                    <li>
                        <Link href={"https://github.com/youkwhd/twrap"} target="_blank">twrap</Link>
                        , simple utility to wrap ascii characters used for readme's
                    </li>
                    <li>
                        <Link href={"https://github.com/youkwhd/libtmdb"} target="_blank">libtmdb</Link>
                        , a wrapper of the movie db api written for c
                    </li>
                    <li>
                        <Link href={"https://github.com/youkwhd/TUNE-CWE-315"} target="_blank">tune-cwe-315</Link>
                        , demonstrates plain-text cookie vulnerability
                    </li>
                </ul>
            </MainLayout>
        </>
    )
}
