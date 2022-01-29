import Link from "next/link";
import { getAllPosts } from "../../utils/getPosts";

export default function TagsPage({ allTags }: any) {
    return (
        <>
            <h1>available list of topics:</h1>
            <ul>
                {allTags.tags.map((tag: string, index: number) => {
                    return (
                        <li key={index}>
                            <Link as={`/tags/${allTags.parsedTags[index]}`} href="/tags/[tag]">
                                {tag}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export async function getStaticProps() {
	const allTags = getAllPosts([
		'tags',
		'parsedTags',
	]);

    const setOfTags= new Set(allTags.map((tag) => tag.tags).flat());
    const setOfParsedTags = new Set(allTags.map((tag) => tag.parsedTags).flat());

	return {
		props: {
            allTags: {
                tags: Array.from(setOfTags),
                parsedTags: Array.from(setOfParsedTags)
            }
		},
	};
}
