import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"

import "@/styles/main.scss"
import "@/styles/font-types/jetbrains-mono.css"
import "@/styles/prism-themes/prism-gruvbox-dark.css"

export default ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <DefaultSeo titleTemplate="youkwhd | %s" />
            <Component {...pageProps} />
        </>
    )
}
