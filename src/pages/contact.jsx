import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Contact = ({ data, location }) => {
    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <Seo title="contact" />
            hello from Contact
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