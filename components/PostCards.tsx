import Link from "next/link";
import { PostType } from "../types/post";

type Props = {
    posts: PostType[];
};

const PostCards = ({ posts }: Props): JSX.Element => {
    return (
        <>
            {posts.map((post: PostType) => {
                return (
                    <ul key={post.slug}>
                        <li>
                            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                                {post.title}
                            </Link>
                        </li>
                        <p>- written at: {post.date.split("T")[0]}</p>
                        tags:
                        <ul>
                            {/* 
                                knowing that the index of parsedTag and tag is the same,
                                we can make use of the 'index' property to summon parsedTag instead
                            */}
                            {post.tags.map((tag: string, index: number) => {
                                return (
                                    <li className="no-padding" key={index}>
                                        <Link as={`/blog/tags/${post.parsedTags[index]}`} href="/blog/tags/[tag]">
                                            {tag}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <br />
                        {post.excerpt}
                    </ul>
                );
            })}
        </>
    );
};

export default PostCards;
