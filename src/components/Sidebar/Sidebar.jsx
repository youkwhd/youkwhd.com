import React from "react";
import { Link } from "gatsby";
import BlankAnchor from "../BlankAnchor";

import Bio from "./Bio";

const Sidebar = ({ location }) => {
    return (
        <div className="sidebar-wrapper">
            <Bio location={location} />
            <div className="navigator">
                <ul>
                    <li><Link to="/blog/">Blog</Link></li>
                    <li><Link to="/contact/">Contact Me</Link></li>
                    <li><BlankAnchor href="https://array-generator.netlify.app">Array Generator</BlankAnchor></li>
                    <li><BlankAnchor href="https://github.com/youkwhd/">Github</BlankAnchor></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;