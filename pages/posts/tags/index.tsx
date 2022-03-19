import Link from "next/link";
import { getAllPosts } from "../../../utils/getPosts";
import { MainLayout } from "../../components/Layout";

import { PageConfig } from "next";
import { NextSeo } from "next-seo";

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
            <NextSeo
                title="list of topics"
            />
            <MainLayout>
                <h1>available list of topics:</h1>
                <ul>
                    {allTags.tags.map((tag: string, index: number) => {
                        return (
                            <li key={index}>
                                <Link as={`/posts/tags/${allTags.parsedTags[index]}`} href="/posts/tags/[tag]">
                                    {tag}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </MainLayout>
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
