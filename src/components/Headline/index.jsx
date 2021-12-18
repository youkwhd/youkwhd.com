import React from "react";

const Headline = ({ children }) => {
    return (
        <>
            <div className="headline-wrapper">
                <div className="headline-container">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Headline;