import Link from 'next/link';
import { getAllPosts } from '../../utils/getPosts';

export default function BlogPage({ allPosts }: any) {
	return (
		<>
			{allPosts.map((post: any) => {
				return (
					<>
						<ul>
							<li>
								<Link as={`/blog/${post.slug}`} href="/blog/[slug]">
									{post.title}
								</Link>
							</li>
							<hr />
							{post.date.split("T")[0]}
							<br />
							<br />
							tags:
							<ul>
								{post.tags.map((tag: string, index: number) => {
									return (
										<li>
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
					</>
				);
			})}
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
