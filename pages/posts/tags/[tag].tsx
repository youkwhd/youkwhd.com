import { getAllPosts } from "../../../utils/getPosts";
import { PostType } from "../../../types/post";
import PostCards from "../../../components/PostCards";
import { MainLayout } from "../../../components/Layout";

import { PageConfig } from "next";
import { NextSeo } from "next-seo";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    filteredPosts: PostType[];
    currentPostTag: string;
};

const TagRelatePage = ({ filteredPosts, currentPostTag }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title={`${currentPostTag} related posts`}
            />
            <MainLayout>
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
    const allPosts = getAllPosts([
        'title',
        'tags',
        'parsedTags',
        'date',
        'slug',
        'excerpt',
    ]);
    
    // filter all the posts that has the current tag.
    const filteredPosts = allPosts.filter((post) => post.parsedTags.includes(params.tag));
    
    let currentPostTag: string = ""; // the current location of /tags/[tag] but un-parsed

    // itterate through the first post, knowing that the current [tag] will always be inside
    // the filtered post of index 0, then get the un-parsed tag
    for (let i = 0; i < filteredPosts[0].parsedTags.length; i++) {
        if (filteredPosts[0].parsedTags[i] === params.tag) { 
            // every position of parsedTag is the same as tag's
            currentPostTag = filteredPosts[0].tags[i];
        }
    }

    return {
        props: {
            filteredPosts,
            currentPostTag
        }
    }
};

export const getStaticPaths = () => {
    const posts = getAllPosts([
        "tags",
        "parsedTags"
    ]); 

    const parsedTags = new Set(posts.map((post) => post.parsedTags).flat());

    return {
        paths: Array.from(parsedTags).map((tag) => {
            return {
                params: {
                    tag,
                },
            }
        }),
        fallback: false,
    };
};
