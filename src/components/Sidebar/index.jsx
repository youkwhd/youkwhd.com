import React from "react";

const Sidebar = ({ children }) => {

    return (
        <>
            <div className="sidebar-container">
                {children}
            </div>
        </>
    );
};

export default Sidebar;
