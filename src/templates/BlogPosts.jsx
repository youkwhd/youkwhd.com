import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Seo from "../components/Seo";
import Sidebar from "../components/Sidebar";
import Headline from "../components/Headline";

const BlogPosts = ({ data }) => {
    const post = data.mdx;
    const posts = data.allMdx.nodes;

    return (
        <>
            <Seo
                title={post.frontmatter.title.toLowerCase()}
                description={post.frontmatter.description || post.excerpt}
            />
            <Headline>
                <h1><Link to="/">{data.site.siteMetadata.author.nickname}</Link></h1>
                <p>
                    Blog — <span className="highlighted-text">a discussion or informational website</span> published on the World Wide Web consisting of discrete, often informal diary-style text entries.
                </p>
            </Headline>
            <main>
                <div className="main-wrapper">
                    <div className="main-container">
                        <h2 className="article-title">{post.frontmatter.title}</h2>
                        <article>
                            <MDXRenderer>{post.body}</MDXRenderer>
                        </article>
                    </div>
                    <Sidebar>
                        <h1>Recent Posts</h1>
                        {posts.map((post) => {
                            return (
                                <article key={post.slug} className="global-article">
                                    <p>
                                        <strong className="sidebar-title"><Link to={`/${post.slug}`}>{post.frontmatter.title}</Link></strong> — {post.frontmatter.description} posted at <strong>{post.frontmatter.date}.</strong>
                                    </p>
                                </article>
                            );
                        })}
                    </Sidebar>
                </div>
            </main>
        </>

    );
}

export default BlogPosts;

export const pageQuery = graphql`
    query PostQuery($slug: String!) {
        site {
            siteMetadata {
                author {
                    nickname
                }
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
        allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
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