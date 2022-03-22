import Link from "next/link";
import type { Post } from "../../types";

type Props = {
    posts: Post[]
};

const RecentPosts = ({ posts }: Props): JSX.Element => {
    return (
        <ul>
            {posts.map((post: Post) => {
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
