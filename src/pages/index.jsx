import React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/Seo";
import Button from "../components/Button";
import Headline from "../components/Headline";
import BlankAnchor from "../components/BlankAnchor";
import Sidebar from "../components/Sidebar";

const Home = ({ data }) => {
	const posts = data.allMdx.nodes;

	return (
		<>
			<Seo title="home" />
			<Headline>
				<h1>Looking For A <span className="highlighted-text">Web Developer</span>?</h1>
				{/* char escaped */}
				<p>I'm a Junior Full-Stack Web Developer living in Jakarta, Indonesia. I make Web Applications, usually with React</p>

				<Link to="/projects"><Button>Review My Projects</Button></Link>
			</Headline>
			<main>
				<div className="main-wrapper">
					<div className="main-container">
						<p>
							I primarily use <strong>TypeScript</strong> along side with <strong>Next.js</strong>, i'm comfortable developing on both frontend and backend.
							From day to day developing web applications, i've gained much experience with my <Link to="/projects">projects</Link>. I'm also attentive to the details of
							the application security.
						</p>

						<p>
							<strong>Frontend Development</strong> — I've always used <strong>React</strong> for my frontend development, pairing it with <strong>Next.js</strong> and sometimes <strong>Gatsby</strong> for it's great use of Static Site Generator (SSG) like as now in this site.
							picking up a new JavaScript framework isn't a problem. I am confident enough and willing to learn new tech stacks.
						</p>

						<p>
							I use Linux, more specifically, Arch Linux as my daily drive operating system. As a GNU/Linux enthusiast, you must've guessed that i love free and open source softwares (FOSS). Indeed, as most of, if not, all of my projects are free and open source.
						</p>

						<p>
							In the other hand, i also like to write articles, especially writing about my growth in the industry as a developer. In my free time, i sometimes solve some problems on HackerRank or LeetCode.
						</p>

						<p>
							<strong>Backend Development</strong> — Node.js is my bread and butter, and it's associated stacks: like MongoDB, JSON Web Tokens, Web Sockets and such.
						</p>

						<p>
							interested to work with me? let's <strong>keep in touch</strong>, mail me at <a href="mailto:lolywk@tutanota.com">lolywk@tutanota.com</a>
						</p>

					</div>
					<Sidebar>
						<p>
							You can see some of the things I've worked on over on my <Link to="/projects">projects page</Link> and my <BlankAnchor href="https://github.com/youkwhd">Github</BlankAnchor> page.
						</p>

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