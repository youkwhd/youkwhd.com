import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Blog = ({ data, location }) => {
    const siteMetadata = data.site.siteMetadata;
	const posts = data.allMdx.nodes;

    return (
        <Layout location={location} title={siteMetadata.title}>
            <Seo title="blog" />
                {posts.map((post) => {
					const title = post.frontmatter.title;
                    const slugLink = post.slug.slice(5);

					return (
						<>
							<article key={post.slug} className="global-article">
								<p><strong><Link to={slugLink}>{title}</Link></strong>: {post.frontmatter.description} posted at <strong>{post.frontmatter.date}</strong></p>
							</article>
						</>
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
    			frontmatter {
        			date(formatString: "MMMM DD, YYYY")
        			description
        			title
      			}
    		}
  		}
	}
`;