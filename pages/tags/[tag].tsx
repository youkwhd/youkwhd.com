import { getAllPosts } from "../../utils/getPosts";
import PostCards from "../../components/PostCards";

export default function TagRelatePage({ filteredPosts, currentPostTag }: any) {
	return (
		<>
			<h1>{currentPostTag} related posts:</h1>
			<PostCards posts={filteredPosts} />
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
