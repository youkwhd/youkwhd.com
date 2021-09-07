import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";

const Home = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMdx.nodes;

	return (
		<Layout location={location} title={siteTitle}>
			<h1>blog posts</h1>
				{posts.map((post) => {
					const title = post.frontmatter.title || post.slug;

					return (
						<article key={post.slug}>
							<h2><Link to={post.slug}>{title}</Link></h2>
							<p>{post.frontmatter.date}</p>
							<p>{post.frontmatter.description}</p>
						</article>
					);
				})}
		</Layout>
	);
};

export default Home;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				description
				title
			}
		}
		allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    		nodes {
    			excerpt
				slug
    			frontmatter {
        			date(formatString: "Do MMMM, YYYY")
        			description
        			title
      			}
    		}
  		}
	}
`;