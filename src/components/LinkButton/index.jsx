import React from "react";

const LinkButton = ({ children, href, _blank }) => {
    return (
        <>
            {_blank ? (
                <>
                    <a href={href || ""} target="_blank" rel="noopener noreferrer" className="button-wrapper">
                        <button>
                            {children}
                        </button>
                    </a>
                </>
            ) : (
                <a href={href || ""} className="button-wrapper">
                    <button>
                        {children}
                    </button>
                </a>
            )}

        </>
    );
};

export default LinkButton;