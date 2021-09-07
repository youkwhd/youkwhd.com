import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";

const NotFoundPage = ({ location }) => {
    return (
		<Layout location={location}>
			<h1>sorry there is no road ahead :(</h1>
			<p>it seems that you are lost, <Link to="/">go back</Link></p>
		</Layout>
	);
};

export default NotFoundPage;
