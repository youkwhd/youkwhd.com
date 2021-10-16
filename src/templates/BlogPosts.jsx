import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const BlogPosts = ({ data, location }) => {
    const post = data.mdx;

    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <Seo 
                title={post.frontmatter.title.toLowerCase()} 
                description={post.frontmatter.description || post.excerpt}    
            />
            {/* <span className="post-category">{post.frontmatter.category.toUpperCase()}</span> */}
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <span className="post-date" style={{ fontSize: 14 }}>{post.frontmatter.date} <strong>({post.timeToRead} minute read)</strong></span>
            <article className="local-article">
                <MDXRenderer>{post.body}</MDXRenderer>
            </article>
        </Layout>
    );
}

export default BlogPosts;

export const pageQuery = graphql`
    query PostQuery($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        mdx(slug: {eq: $slug}) {
            body
            excerpt
            timeToRead
            frontmatter {
                author
                date(formatString: "D MMM, YYYY")
                title
            }
        }
    }
`;