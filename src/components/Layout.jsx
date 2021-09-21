import React from "react";
import { Link } from "gatsby";

import { bunny } from "../../utils/ascii";

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`; 
    const paths = [ rootPath, `${rootPath}blog/`, `${rootPath}contact/` ];
    let isMainPath, includesPath, header;

    for (let i = 0; i < paths.length; i++) {
        if (location.pathname === paths[i]) {
            isMainPath = true;
        }

        if (location.pathname.includes(paths[i])) {
            includesPath = paths[i];
        }
    }

    if(isMainPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        );
    } else {
        if (includesPath) {
            header = (
                <h1 className="header-link-home">
                    <Link to={includesPath}>{title}</Link>
                </h1>
            );
        } else {
            header = (
                <h1 className="header-link-home">
                    <Link to="/">{title}</Link>
                </h1>
            );
        }
    }

    console.log(`%c ${bunny}`, "color:#9acc14; background:black; font-family: monospace");
    
    return (
        <div className="global-wrapper">
            <header className="text-wrapper global-header">{header}</header>
            <main className="text-wrapper">{children}</main>
        </div>
    );
};

export default Layout;
