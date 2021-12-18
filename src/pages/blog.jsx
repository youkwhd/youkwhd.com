import React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/Seo";
import Sidebar from "../components/Sidebar";
import Headline from "../components/Headline";

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
							return (
								<article key={post.slug} className="global-article">
									<p>
										<strong className="sidebar-title"><Link to={`/${post.slug}`}>{post.frontmatter.title}</Link></strong> — {post.frontmatter.description} posted at <strong>{post.frontmatter.date}.</strong>
									</p>
								</article>
							);
						})}
					</div>
					<Sidebar>
						<p>
							These are my <strong>archive</strong>, articles that i made from 2021 ‒ now.
							Thank you for reading!
						</p>
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
