import { PageConfig } from "next";
import { NextSeo } from "next-seo";

import { getAllPosts } from "../../../utils/getPosts";
import { Banner, Post } from "../../../types";
import PostCards from "../../../components/PostCards";
import { MainLayout } from "../../../components/Layout";
import { getAllBanners } from "../../../utils/getBanners";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    filteredPosts: Post[];
    currentPostTag: string;
    banners: Banner[];
};

const TagRelatePage = ({ filteredPosts, currentPostTag, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title={`${currentPostTag} related posts`}
            />
            <MainLayout banners={banners}>
                <h1>{currentPostTag} related posts:</h1>
                <PostCards posts={filteredPosts} />
            </MainLayout>
        </>
    );
};

export default TagRelatePage;

type Params = {
    params: {
        tag: string;
    };
};

export const getStaticProps = ({ params }: Params) => {
    const banners: Banner[] = getAllBanners();
    const allPosts: Post[] = getAllPosts();
    
    // filter all the posts that has the current tag.
    const filteredPosts: Post[] = allPosts.filter((post) => post.parsedTags.includes(params.tag));
    
    let currentPostTag: string = "";

    // get the un-parsed tag
    // e.g. parsed: params.tag (software-development) un-parsed: (software development)
    for (let i = 0; i < filteredPosts[0].parsedTags.length; i++) {
        // found index position of `params.tag` on the array
        if (filteredPosts[0].parsedTags[i] === params.tag) {  
            // assign the un-parsed tag
            currentPostTag = filteredPosts[0].tags[i];
        }
    }

    return {
        props: {
            filteredPosts,
            currentPostTag,
            banners
        }
    };
};

export const getStaticPaths = () => {
    const posts: Post[] = getAllPosts();
    const parsedTags: Set<string> = new Set(posts.map((post) => post.parsedTags).flat());

    return {
        paths: Array.from(parsedTags).map((tag: string) => {
            return {
                params: {
                    tag,
                },
            }
        }),
        fallback: false,
    };
};
