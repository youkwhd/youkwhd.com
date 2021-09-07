import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout/Layout";

const BlogPosts = ({ data, location }) => {
    const post = data.mdx;

    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <span className="post-category">{post.frontmatter.category.toUpperCase()}</span>
            <h1>{post.frontmatter.title}</h1>
            <ul className="post-author">
                <li>written by {post.frontmatter.author}</li>
                <li>{post.frontmatter.date}</li>
            </ul>
            <article>
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
            frontmatter {
                author
                category
                date(formatString: "D MMM, YYYY")
                title
            }
        }
    }
`;