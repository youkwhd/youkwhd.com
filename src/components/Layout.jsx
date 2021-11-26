import React from "react";
import { Link } from "gatsby";

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
            <>
                <h3>
                    <Link to="/">{title}</Link>
                </h3>
                <hr />
            </>
        );
    } else {
        if (includesPath) {
            header = (
                <>
                    <h3>
                        <Link to={includesPath}>{title}</Link>
                    </h3>
                    <hr />
                </>
            );
        }
    }

    console.log(`%cpersonal blog by: @youkwhd on github`, "color:#9acc14; background:black; font-family: monospace");

    return (
        <>
            <header className="text-wrapper global-header">{header}</header>
            <main className="text-wrapper">{children}</main>
        </>
    );
};

export default Layout;
