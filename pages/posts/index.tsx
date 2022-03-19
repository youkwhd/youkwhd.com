import { getAllPosts } from '../../utils/getPosts';
import { PostType } from "../../types/post";
import PostCards from "../../components/PostCards";
import { MainLayout } from "../../components/Layout";

import { PageConfig } from "next";
import { NextSeo } from 'next-seo';

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    allPosts: PostType[];
};

const PostsPage = ({ allPosts }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="blog posts"
            />
            <MainLayout>
                <h1>blog posts:</h1>
                <PostCards posts={allPosts} />
            </MainLayout>
        </>
    );
};

export default PostsPage;

export const getStaticProps = () => {
    const allPosts = getAllPosts([
        'title',
        'tags',
        'parsedTags',
        'date',
        'slug',
        'excerpt',
    ]);

    return {
        props: {
            allPosts	
        },
    };
};
