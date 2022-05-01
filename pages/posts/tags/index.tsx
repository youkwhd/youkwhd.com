import Link from "next/link";
import { PageConfig } from "next";
import { NextSeo } from "next-seo";

import { getAllBanners } from "../../../utils/getBanners";
import { getAllPosts } from "../../../utils/getPosts";
import { MainLayout } from "../../../components/Layout";
import { Post, Banner } from "../../../types";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    tags: {
        [key: string]: string
    };
    banners: Banner[];
};

const TagsPage = ({ tags, banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="list of topics"
            />
            <MainLayout banners={banners}>
                <h1>available list of topics:</h1>
                <ul>
                    {Object.entries(tags).map(([key, val]) => {
                        return (
                            <li key={val}>
                                <Link as={`/posts/tags/${key}`} href="/posts/tags/[tag]">
                                    {val}
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
    const posts: Post[] = getAllPosts();
    const banners: Banner[] = getAllBanners();

    const uniqueTags: { [key: string]: string } = {};
    posts.forEach((post: Post) => {
        for (const key in post.tags) {
            // perf: checks if key is not present
            if (!uniqueTags[key]) {
                uniqueTags[key] = post.tags[key];
            }
        }
    });

    return {
        props: {
            tags: uniqueTags,
            banners
        },
    };
};
