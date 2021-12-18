import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import BlankAnchor from "../components/BlankAnchor";

const Contact = ({ data, location }) => {
	return (
		<Layout location={location} title={data.site.siteMetadata.title}>
			<Seo title="contact" />
			<p>let's make a connection <BlankAnchor href="mailto:lolywk@tutanota.com">lolywk@tutanota.com</BlankAnchor></p>
		</Layout>
	);
};

export default Contact;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;