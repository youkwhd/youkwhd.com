import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Home = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="home" />
			<article className="local-article">
				<p><Link to="/blog/">checkout my blog</Link> this and what lul <Link to="/contact/">contact me</Link></p>
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
