import { PageConfig } from "next";
import { NextSeo } from "next-seo";

import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { getAllBanners } from "../../utils/getBanners";
import { markdownToHTML } from "../../utils/markdownConverter";

import { Post, Banner } from "../../types";
import { MainLayout } from "../../components/Layout";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    post: Post;
    banners: Banner[];
};

const PostContentPage = ({ post, banners }: Props): JSX.Element => {
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
    );
};

export default PostContentPage;

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps = async ({ params }: Params) => {
    const postKeys: Post = getPostBySlug(params.slug);
    const content: string = await markdownToHTML(postKeys.content || "");
    const banners: Banner[] = getAllBanners();

    return {
        props: {
            post: {
                ...postKeys,
                content,
            },
            banners
        },
    };
};

export const getStaticPaths = () => {
    const posts: Post[] = getAllPosts();

    // all the paths that's possible to be rendered out	
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    };
};
