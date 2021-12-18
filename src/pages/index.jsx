import React from "react";
import { Link, graphql } from "gatsby";
import Headline from "../components/Headline";
import LinkButton from "../components/LinkButton";
import Seo from "../components/Seo";

import Sidebar from "../components/Sidebar";

const Home = ({ data }) => {
	const posts = data.allMdx.nodes;

	return (
		<>
			<Seo title="home" />
			<Headline>
				<h1>Looking For A <span className="highlighted-text">Web Developer</span>?</h1>
				{/* char escaped */}
				<p>I'm a Web Developer &amp; Programmer Living In Jakarta, Indonesia. I Make Web Applications, Usually With React</p>

				<LinkButton href="mailto:lolywk@tutanota.com" >Send Me An Email</LinkButton>
			</Headline>
			<main>
				<div className="main-wrapper">
					<div className="main-container">
						<p>
							I primarily use <strong>TypeScript</strong> along side with <strong>Next.js</strong>, i'm comfortable developing on the frontend or backend
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit deserunt fugiat magni! Repudiandae porro incidunt, quae aliquam ut impedit!
						</p>
					</div>
					<Sidebar>
						<p>
							You can see some of the things I've worked on over on my projects page and my Github page.
						</p>

						<h1>Recent Posts</h1>
						{posts.map((post) => {
							const title = post.frontmatter.title;
							const slugLink = post.slug;

							return (
								<>
									<article key={post.slug} className="global-article">
										<p><strong><Link to={`/${slugLink}`}>{title}</Link></strong> — {post.frontmatter.description} posted at <strong>{post.frontmatter.date}.</strong></p>
									</article>
								</>
							);
						})}
					</Sidebar>
				</div>
			</main>
		</>
	);
};

export default Home;

export const pageQuery = graphql`
	query {
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