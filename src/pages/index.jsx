import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import BlankAnchor from "../components/BlankAnchor";

const Home = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMdx.nodes;

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="home" />
			<article>
				<p>hello developers! welcome to my page, i'm new to the programming world, 
				yet no experience as an employee neither self-employed. i love coding, not for the salary. simply because i love it, 
				it has been my hobby since i know how to code. the satisfaction after you solve a problem is priceless, 
				at least for me. thank you for the visit. have a nice day! also <Link to="/blog/">check out my blog</Link>
				, you can <BlankAnchor href="https://github.com/youkwhd">find me on github</BlankAnchor>. feel free to <BlankAnchor href="https://github.com/youkwhd/youkwhd.github.io/">contribute to this page's</BlankAnchor> github repository.</p>
			</article>

			<hr />

			<h3 className="title">navigator:</h3>

			<ul>
                <li><Link to="/blog/">blog</Link></li>
                <li><Link to="/contact/">contact me</Link></li>
				<li><BlankAnchor href="https://array-generator.netlify.app">array-generator</BlankAnchor></li>
                <li><BlankAnchor href="https://github.com/youkwhd/">github</BlankAnchor></li>
            </ul>

			<hr />

			<h3 className="title">articles that i made:</h3>

			{posts.map((post) => {
					const title = post.frontmatter.title;
                    const slugLink = post.slug;

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
};

export default Home;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
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
