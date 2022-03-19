import Link from "next/link";
import type { PostType } from "../../types/post";

type Props = {
    posts: PostType[]
};

const RecentPosts = ({ posts }: Props): JSX.Element => {
    return (
        <ul>
            {posts.map((post: PostType) => {
                return (
                    <li key={post.slug}>
                        <Link as={`/posts/${post.slug}`} href={"/posts/[slug]"}>
                            {post.title}
                        </Link>
                    </li>
                );
            })}
        </ul>   
    );
};

export default RecentPosts;
