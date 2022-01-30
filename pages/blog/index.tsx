import { getAllPosts } from '../../utils/getPosts';
import PostCards from "../../components/PostCards";

export default function BlogPage({ allPosts }: any) {
    return (
        <>
            <h1>blog posts:</h1>
            <PostCards posts={allPosts} />
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'tags',
        'parsedTags',
        'date',
        'slug',
        'excerpt',
    ]);

    return {
        props: {
            allPosts	
        },
    };
}
