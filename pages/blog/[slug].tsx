import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { markdownToHTML } from "../../utils/markdownConverter";
import { PostType } from "../../types/post";

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
    const postkeys = getPostBySlug(params.slug, [
        'slug',
        'title',
        'content',
    ]);

    const content = await markdownToHTML(postkeys.content || '');

    return {
        props: {
            post: {
                ...postkeys,
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
