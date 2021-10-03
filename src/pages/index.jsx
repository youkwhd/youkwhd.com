import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import Bio from "../components/Bio";
import BlankAnchor from "../components/BlankAnchor";

const Home = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="home" />
			<Bio />
			<span>pages:</span>
			<ul style={{ margin: 0, paddingTop: 14}}>
				<li style={{ margin: 0 }}><Link to="/blog/">check out my blog</Link></li>
				<li style={{ margin: 0 }}><Link to="/contact/">contact me here</Link></li>
			</ul>
			<article style={{ margin: 0, paddingTop: 18 }}>
				<p style={{ marginBottom: 28 }}>hello developers! welcome to my page, i'm new to the programming world, 
				yet no experience as an employee neither self-employed. i love coding, not for the salary. simply because i love it, 
				it has been my hobby since i know how to code. the satisfaction after you solve a problem is priceless, 
				at least for me. thank you for the visit. have a nice day! also <Link to="/blog/">check out my blog</Link>
				, you can <BlankAnchor href="https://github.com/youkwhd">find me</BlankAnchor> on github. feel free to <BlankAnchor href="https://github.com/youkwhd/youkwhd.github.io/">contribute to this page's</BlankAnchor> github repository.</p>
			</article>
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
	}
`;
