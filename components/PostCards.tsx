import Link from "next/link";

export default function PostCards({ posts }: any) {
    return (
        <>
            {posts.map((post: any) => {
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
                            {post.tags.map((tag: string, index: number) => {
                                return (
                                    <li className="no-padding" key={index}>
                                        <Link as={`/tags/${post.parsedTags[index]}`} href="/tags/[tag]">
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
}