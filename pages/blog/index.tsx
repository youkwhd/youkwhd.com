import Link from 'next/link';
import { getAllPosts } from '../../utils/getPosts';

const BlogPage = ({ allPosts }: any) => {
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
							{post.excerpt}
						</ul>
					</>
				);
			})}
		</>
	);
}

export default BlogPage;

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'excerpt',
	])

	return {
		props: {
			allPosts	
		},
	}
}
