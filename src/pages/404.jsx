import React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/Seo";

const NotFoundPage = () => {
    return (
		<div className="text-wrapper">
            <Seo title="404: not found" />
			<h1>sorry there is no road ahead :(</h1>
			<p>it seems that you are lost, <Link to="/">go back</Link></p>
		</div>
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
