import Link from "next/link";
import { getAllPosts } from "../../utils/getPosts";

export default function TagRelatePage({ filteredPosts, currentPostTag }: any) {
	return (
		<>
			<h1>{currentPostTag} related posts:</h1>
			{filteredPosts.map((post: any) => {
				return (
                    <ul key={post.slug}>
                        <li>
                            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                                {post.title}
                            </Link>
                        </li>
						<p>- written at: {post.date.split("T")[0]}</p>
                        tags:
                        <ul>
                            {post.tags.map((tag: string, index: number) => {
                                return (
									<li className="no-padding" key={index}>
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
    
	// filter all the posts that has the current tag.
	const filteredPosts = allPosts.filter((post) => post.parsedTags.includes(params.tag));

	// get the un-parsed tag
	let currentPostTag: string = "";
	for (let i = 0; i < filteredPosts[0].parsedTags.length; i++) {
		if (filteredPosts[0].parsedTags[i] === params.tag) currentPostTag = filteredPosts[0].tags[i];  
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
