import Link from "next/link"
import Banner from "@/src/components/Banner"
import type { Banner as BannerType } from "@/lib/banner"

type Props = { banners: BannerType[] }
export default ({ banners }: Props): JSX.Element => {
    return (
        <footer>
            <hr/>
            <p>go back to the <Link href="/">homepage</Link> | updates via <Link href="/rss.xml">rss</Link></p>
            <div className="banner-wrapper">
                {banners.map((banner: BannerType) => <Banner src={banner.src} href={banner.url} key={banner.index} />)}
            </div>
        </footer>
    )
}
