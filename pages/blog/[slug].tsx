import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { markdownToHTML } from "../../utils/markdownConverter";
import { PostType } from "../../types/post";
import { PageConfig } from "next";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    post: PostType;
};

const BlogContentPage = ({ post }: Props): JSX.Element => {
    return (
        <>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
    );
};

export default BlogContentPage;

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticProps = async ({ params }: Params) => {
    const postKeys = getPostBySlug(params.slug, [
        'title',
        'content',
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
        'slug'
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
