import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Home = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="Home" />
			<article className="local-article">
				<p>hello, i'm youkwhd <br /> <br /> If you're a fellow software developer, feel free to <Link to="/blog/">checkout my blog</Link> where I write about various programming and technology topics.</p>
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
