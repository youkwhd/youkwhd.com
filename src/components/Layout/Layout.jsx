import React from "react";
import { Link } from "gatsby";

const Layout = ({ title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
        <div className="global-wrapper">
            <header className="global-header">
                <h1 className="main-heading">
                    <Link to="/">{title}</Link>
                </h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
