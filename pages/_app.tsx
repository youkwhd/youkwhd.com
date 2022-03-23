import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "../styles/font-types/jetbrains-mono.css";
import "../styles/main.css";
import "../styles/prism-themes/prism-gruvbox-dark.css";

const _app = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <DefaultSeo
                titleTemplate="youkwhd | %s"
            />
            <Component {...pageProps} />
        </>
    );
};

export default _app; 
