import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlankAnchor from "../components/BlankAnchor";

const BlogPosts = ({ data, location }) => {
    const post = data.mdx;

    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <Seo 
                title={post.frontmatter.title.toLowerCase()} 
                description={post.frontmatter.description || post.excerpt}    
            />
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <article className="local-article">
                <MDXRenderer>{post.body}</MDXRenderer>
            </article>
            <footer>
                <p>if you find a typo, <BlankAnchor href={`https://github.com/youkwhd/youkwhd.github.io/tree/master/content/${post.slug}index.md`}>check the markdown file</BlankAnchor> on this page repo. then <BlankAnchor href="https://github.com/youkwhd/youkwhd.github.io/issues">open an issue</BlankAnchor> on the repo.</p>
            </footer>
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
            slug
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