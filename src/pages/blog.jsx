import React from "react";
import { Link, graphql } from "gatsby";

import Headline from "../components/Headline";
import Sidebar from "../components/Sidebar";
import Seo from "../components/Seo";

const Blog = ({ data }) => {
	const siteMetadata = data.site.siteMetadata;
	const posts = data.allMdx.nodes;

	return (
		<>
			<Seo title="blog" />
			<Headline>
				<h1><Link to="/">{siteMetadata.author.nickname}</Link></h1>
				<p>
					Blog — <span className="highlighted-text">a discussion or informational website</span> published on the World Wide Web consisting of discrete, often informal diary-style text entries.
				</p>
			</Headline>
			<main>
				<div className="main-wrapper">
					<div className="main-container">
						{posts.map((post) => {
							const title = post.frontmatter.title;
							const slugLink = post.slug;

							return (
								<>
									<article key={post.slug} className="global-article">
										<p key={Math.random()}>
											<strong><Link to={`/${slugLink}`}>{title}</Link></strong> — {post.frontmatter.description} posted at <strong>{post.frontmatter.date}.</strong>
										</p>
									</article>
								</>
							);
						})}
					</div>
					<Sidebar>
						<h1>Recent Posts</h1>
						{posts.map((post) => {
							const title = post.frontmatter.title;
							const slugLink = post.slug;

							return (
								<>
									<article key={post.slug} className="global-article">
										<p key={Math.random()}>
											<strong><Link to={`/${slugLink}`}>{title}</Link></strong> — {post.frontmatter.description} posted at <strong>{post.frontmatter.date}.</strong>
										</p>
									</article>
								</>
							);
						})}
					</Sidebar>
				</div>
			</main>

		</>
	);
}

export default Blog;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				description
				title
				author {
					nickname
				}
			}
		}
		allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    		nodes {
    			excerpt
				slug
    			frontmatter {
        			date(formatString: "MMMM DD, YYYY")
        			description
        			title
      			}
    		}
  		}
	}
`;
