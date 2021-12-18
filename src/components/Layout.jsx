import React from "react";
import LinkButton from "./LinkButton";
import Headline from "./Headline";

const Layout = ({ children }) => {
    console.log(`%cpersonal blog by: @youkwhd on github`, "color:#9acc14; background:black; font-family: monospace");

    return (
        <>
            <Headline>
                <h1>Looking For A <span className="highlighted-text">Web Developer</span>?</h1>
                {/* char escaped */}
                <p>I'm a Web Developer &amp; Programmer Living In Jakarta, Indonesia. I Make Web Applications, Usually With React</p>

                <LinkButton href="mailto:lolywk@tutanota.com" >Send Me An Email</LinkButton>
            </Headline>
            {children}
        </>
    );
};

export default Layout;
