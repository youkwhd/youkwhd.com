import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const BlogPosts = ({ data, location }) => {
    const post = data.mdx;
    const featuredImage = getImage(post.frontmatter.featuredImage);
    const imageExist = featuredImage !== undefined;

    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <Seo 
                title={post.frontmatter.title} 
                description={post.frontmatter.description || post.excerpt}    
            />
            <span className="post-category">{post.frontmatter.category.toUpperCase()}</span>
            <h1 className="post-title">{post.frontmatter.title}</h1>
            { imageExist && <GatsbyImage image={featuredImage} alt="featured image"/> }
            <ul className="post-author">
                <li>written by {post.frontmatter.author}</li>
                <li>{post.frontmatter.date}</li>
            </ul>
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
            frontmatter {
                author
                category
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
                date(formatString: "D MMM, YYYY")
                title
            }
        }
    }
`;