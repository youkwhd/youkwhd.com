import Link from "next/link";
import { PageConfig } from "next";
import { NextSeo } from "next-seo";

import { Post, Banner } from "../types";
import { MainLayout } from "../components/Layout";
import RecentPosts from "../components/RecentPosts";
import { getAllPosts } from "../utils/getPosts";
import { getAllBanners } from "../utils/getBanners";
import { generateRSSFeed } from "../utils/generateRSSFeed";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    recentPosts: Post[];
    banners: Banner[];
};

const Home = ({ recentPosts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="homepage"
                description="a personal blog maintained by youkwhd, contents are mostly about GNU/Linux or programming."
            />
            <MainLayout banners={banners}>
                <h1>whoami</h1>
                <p>
                    I'm an undergraduate student majoring Computer Science, but also known as Informatics in my country, Indonesia.
                    I love programming at every aspect of it, it has been my hobby since i know the programming way to solve problems, plus the math involed in it. 
                    I mean, it looks cool to write such program with Vim and seeing people thinking that you're some kind of a hackerman. I'm currently working with web apps,
                    usually with React, and i primarily use Typescript as my go-to language alongside with Next.js, i'm also comfortable developing the backend using Node.js.
                </p>
                <p>
                    As a GNU/Linux enthusiast, I use Arch as my daily drive operating system. I wanted to use Gentoo cuz i'm a geek myself, plus arch is 
                    a rolling release distribution, i'm lazy. But it would be a pain in the ass to compile things from source. I stand with the movement of free and open source
                    softwares (FOSS). As most of, if not, all of my projects are free and open source. You have to note that the term "free" and "open source" is different.
                </p>
                <h2>take a look at my blog</h2>
                <p>
                    Writing articles has also been one of my hobby. Some articles that i've wrote isn't guaranteed to be perfect in terms of writing. You can
                    find <Link href={"/posts"}><a>all of my articles</a></Link> by clicking the link, or find it by checking <Link href={"/posts/tags"}><a>all the available tags</a></Link>, you can always 
                    help me by contributing to this site and fix some problems i have on this site. Speaking of blog, here are some of my recent blog posts:
                </p>
                <RecentPosts posts={recentPosts} />
                <h2>contact me</h2>
                <p>
                    Please contact me via email, the address is <Link href={"mailto:lolywk@tutanota.com"}><a>lolywk@tutanota.com</a></Link>,
                    grab my <Link href={"/pgp-public-key"}><a>pgp public key</a></Link> for convenience.
                </p>
            </MainLayout>
        </>
    );
};

export const getStaticProps = async () => {
    const allPosts: Post[] = getAllPosts();
    const recentPosts: Post[] = allPosts.slice(0, 3);

    const banners: Banner[] = getAllBanners();
    await generateRSSFeed(allPosts);

    return {
        props: {
            recentPosts,
            banners
        },
    };
};

export default Home;
