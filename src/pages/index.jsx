import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";

const Home = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMdx.nodes;

	return (
		<Layout>
			<h1>{siteTitle}</h1>
			<ul>
				{posts.map((post) => {
					const date = post.frontmatter.date;
					const description = post.frontmatter.description;
					const title = post.frontmatter.title;

					return (
						<li key={title}>
							<h2>
								<Link to="/">
									{title}
								</Link>
							</h2>
							<p>{date}</p>
							<p>{description}</p>
						</li>
					);
				})}
			</ul>
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