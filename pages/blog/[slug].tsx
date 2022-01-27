import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { markdownToHTML } from "../../utils/markdownConverter";

const BlogContentPage = ({ post }: any) => {
	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</>
	);
}

export default BlogContentPage;

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const postKeys = getPostBySlug(params.slug, [
        'slug',
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
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
        return {
            params: {
            slug: post.slug,
            },
        }
        }),
        fallback: false,
    }
}
