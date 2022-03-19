import "../styles/main.css";
// import "../styles/prism-themes/prism-atom-dark.css";
import "../styles/prism-themes/prism-gruvbox-dark.css"
import type { AppProps } from "next/app";

const _app = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default _app; 
