import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"

import "@/src/styles/main.scss"
import "@/src/styles/prism-themes/prism-custom.css"

export default ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <DefaultSeo titleTemplate="youkwhd | %s" />
            <Component {...pageProps} />
        </>
    )
}
