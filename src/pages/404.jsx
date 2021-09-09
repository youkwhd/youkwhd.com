import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
    return (
		<Layout location={location} title={data.site.siteMetadata.title}>
			<Seo title="404: not found" />
			<h1>sorry there is no road ahead :(</h1>
			<p>it seems that you are lost, <Link to="/">go back</Link></p>
		</Layout>
	);
};

export default NotFoundPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
