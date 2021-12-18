import React from "react";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import Headline from "../components/Headline";

const NotFoundPage = () => {
	return (
		<>
			<Seo title="404: Not Found" />
			<Headline>
				<h1>Are You <span className="highlighted-text">Lost</span>?</h1>
				<p>Whoops! there is no road ahead. The page that you are looking for doesn't exist, redirect to the <Link to="/">Root page</Link> instead.</p>
			</Headline>
		</>
	);
};

export default NotFoundPage;
