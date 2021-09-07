import React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    let header;

    if(isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        );
    } else {
        header = (
            <h1 className="header-link-home">
                <Link to="/">{title}</Link>
            </h1>
        )
    }
    
    return (
        <div className="global-wrapper">
            <header className="text-wrapper global-header">{header}</header>
            <main className="text-wrapper">{children}</main>
        </div>
    );
};

export default Layout;
