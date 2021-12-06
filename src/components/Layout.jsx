import React from "react";

import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ location, children }) => {
    console.log(`%cpersonal blog by: @youkwhd on github`, "color:#9acc14; background:black; font-family: monospace");

    return (
        <>
            <main className="site-wrapper">
                <Sidebar location={location} />
                <div className="content-wrapper">{children}</div>
            </main>
        </>
    );
};

export default Layout;
