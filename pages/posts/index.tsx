import { getAllPosts } from "../../utils/getPosts";
import type { Post, Banner } from "../../types";

import PostCards from "../../components/PostCards";
import { MainLayout } from "../../components/Layout";

import { PageConfig } from "next";
import { NextSeo } from "next-seo";
import { getAllBanners } from "../../utils/getBanners";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    allPosts: Post[];
    banners: Banner[];
};

const PostsPage = ({ allPosts, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="blog posts"
            />
            <MainLayout banners={banners}>
                <h1>blog posts:</h1>
                <PostCards posts={allPosts} />
            </MainLayout>
        </>
    );
};

export default PostsPage;

export const getStaticProps = () => {
    const allPosts = getAllPosts([
        "title",
        "tags",
        "parsedTags",
        "date",
        "slug",
        "excerpt",
    ]);
    
    const banners: Banner[] = getAllBanners();

    return {
        props: {
            allPosts,
            banners
        },
    };
};
