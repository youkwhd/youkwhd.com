import { getAllPosts, getPostBySlug } from "../../utils/getPosts";
import { markdownToHTML } from "../../utils/markdownConverter";

export default function BlogContentPage({ post }: any) {
	return (
		<>
			<h1>{post.title}</h1>
			<hr />
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</>
	);
}

type Params = {
    params: {
        slug: string
    }
};

export async function getStaticProps({ params }: Params) {
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
