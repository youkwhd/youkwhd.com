import Link from "next/link"
import Banner from "@/components/Banner"
import type { Banner as BannerType } from "@/types"

type Props = { banners: BannerType[] }
export default ({ banners }: Props): JSX.Element => {
    return (
        <footer>
            <hr/>
            <p>go back to the <Link href="/"><a>homepage</a></Link> | updates via <a href="/rss.xml">rss</a></p>
            <div className="banner-wrapper">
                {banners.map((banner: BannerType) => <Banner src={banner.src} href={banner.url} key={banner.index} />)}
            </div>
        </footer>
    )
}
