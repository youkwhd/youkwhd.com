import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { markdownToHTML } from "../../utils/markdownConverter";

const BlogContentPage = ({ post }: any) => {
	return (
		<>
			<h1>{post.title}</h1>
			<hr />
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</>
	);
}

export default BlogContentPage;

type params = {
    params: {
        slug: string
    }
};

export async function getStaticProps({ params }: params) {
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
}

export async function getStaticPaths() {
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
}
