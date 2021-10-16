import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Blog = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMdx.nodes;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="blog" />
                {posts.map((post) => {
					const title = post.frontmatter.title;
                    const slugLink = post.slug.slice(5);

					return (
						<article key={post.slug} className="global-article">
							<h2><Link to={slugLink}>{title}</Link></h2>
							<div className="global-desc">
								<p>{post.frontmatter.date} <strong>({post.timeToRead} min read)</strong></p>
								<p>{post.frontmatter.description}</p>
							</div>
						</article>
					);
				})}
        </Layout>
    );
}

export default Blog;

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
				timeToRead
    			frontmatter {
        			date(formatString: "MMMM DD, YYYY")
        			description
        			title
      			}
    		}
  		}
	}
`;