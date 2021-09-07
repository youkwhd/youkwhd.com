import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout/Layout";

const BlogPosts = ({ data }) => {
    const post = data.mdx;

    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <article>
                <MDXRenderer>{post.body}</MDXRenderer>
            </article>
        </Layout>
    );
}

export default BlogPosts;

export const pageQuery = graphql`
    query GetPostBySlug($slug: String!) {
        mdx(slug: {eq: $slug}) {
            body
            frontmatter {
                date(formatString: "Do MMMM, YYYY")
                title
            }
        }
    }
`;