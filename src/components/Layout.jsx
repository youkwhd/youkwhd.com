import React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
    const path = {
        rootPath: `${__PATH_PREFIX__}/`,
        blogPath: {
            rootPath: `${__PATH_PREFIX__}/blog/`,
            nonRootPath: `${__PATH_PREFIX__}/blog`,
        }    
    }
    
    const isRootPath = location.pathname === path.rootPath;
    const isBlogPath = location.pathname === path.blogPath.rootPath || location.pathname === path.blogPath.nonRootPath;
    let header;

    if(isRootPath || isBlogPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        );
    } else {
        header = (
            <h1 className="header-link-home">
                <Link to="/blog/">{title}</Link>
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
