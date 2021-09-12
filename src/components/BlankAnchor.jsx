import React from "react";

const BlankAnchor = ({ children, href }) => {
    return (
        <a href={href || null} target="_blank" rel="noopener noreferrer">{children || null}</a>
    );
};

export default BlankAnchor;