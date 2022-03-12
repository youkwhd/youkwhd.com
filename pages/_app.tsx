import '../styles/globals.css';
import '../styles/prism.css';
import type { AppProps } from 'next/app';

const _app = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default _app; 
