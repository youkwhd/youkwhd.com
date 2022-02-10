import Link from "next/link";
import { getAllPosts } from "../../utils/getPosts";
import { PageConfig } from "next";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    allTags: {
        tags: string[];
        parsedTags: string[];
    };
};

const TagsPage = ({ allTags }: Props): JSX.Element => {
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
};

export default TagsPage;

export const getStaticProps = () => {
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
};
