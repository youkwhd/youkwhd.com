import Link from "next/link";
import { Post } from "../types";

type Props = {
    posts: Post[];
};

const PostCards = ({ posts }: Props): JSX.Element => {
    return (
        <ul>
            {posts.map((post: Post) => {
                const parsedPostDate = [post.date.split("T")[0];

                return (
                    <li key={post.slug}>
                        <span>{parsedPostDate} - </span>
                        <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                            {post.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default PostCards;
