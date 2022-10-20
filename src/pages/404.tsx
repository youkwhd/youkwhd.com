import { PageConfig } from "next"
import { NextSeo } from "next-seo"
import Link from "next/link"

import { MainLayout } from "@/src/components/Layout"
import { getAllBanners } from "@/utils/getBanners"
import type { Banner } from "@/src/types"

export const config: PageConfig = { unstable_runtimeJS: false }

export const getStaticProps = async () => {
    return {
        props: {
            banners: getAllBanners()
        }
    }
}

type Props = { banners: Banner[] }
export default ({ banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo
                title="404 not found"
            />
            <MainLayout banners={banners}>
                <h1>404 not found</h1>
                <p>The page you are requesting is sadly not present. Are you lost? consider going back to the <Link href="/"><a>homepage</a></Link>.</p>
            </MainLayout>
        </>
    )
}