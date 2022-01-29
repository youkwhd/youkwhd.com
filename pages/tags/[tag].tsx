import Link from "next/link";
import { getAllPosts } from "../../utils/getPosts";

export default function TagRelatePage({ filteredPosts }: any) {
	return (
		<>
			{filteredPosts.map((post: any) => {
				return (
                    <ul key={post.slug}>
                        <li>
                            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                                {post.title}
                            </Link>
                        </li>
                        <hr />
                        {post.date.split("T")[0]}
                        <br />
                        <br />
                        tags:
                        <ul>
                            {post.tags.map((tag: string, index: number) => {
                                return (
                                    <li key={index}>
                                        <Link as={`/tags/${post.parsedTags[index]}`} href="/tags/[tag]">
                                            {tag}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <br />
                        {post.excerpt}
                    </ul>
				);
			})}	
		</>
	);
}

type Params = {
    params: {
        tag: string
    }
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
    
	const filteredPosts = allPosts.filter((post) => post.parsedTags.includes(params.tag)); 
		
	return {
		props: {
			filteredPosts
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
