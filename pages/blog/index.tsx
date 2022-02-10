import { getAllPosts } from '../../utils/getPosts';
import { PostType } from "../../types/post";
import PostCards from "../../components/PostCards";
import { PageConfig } from "next";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

type Props = {
    allPosts: PostType[];
};

const BlogPage = ({ allPosts }: Props): JSX.Element => {
    return (
        <>
            <h1>blog posts:</h1>
            <PostCards posts={allPosts} />
        </>
    );
};

export default BlogPage;

export const getStaticProps = () => {
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
};
