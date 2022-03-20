import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { markdownToHTML } from "../../utils/markdownConverter";
import { PostType } from "../../types/post";
import { MainLayout } from "../../components/Layout";

import { PageConfig } from "next";
import { NextSeo, ArticleJsonLd } from "next-seo";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    post: PostType;
};

const PostContentPage = ({ post }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title={post.title.toLowerCase()}
                description={post.excerpt}
            />
            <MainLayout>
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
    const postKeys = getPostBySlug(params.slug, [
        "title",
        "content",
        "excerpt"
    ]);

    const content = await markdownToHTML(postKeys.content || '');

    return {
        props: {
            post: {
                ...postKeys,
                content,
            },
        },
    };
};

export const getStaticPaths = () => {
    const posts = getAllPosts([
        "slug"
    ]);

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
