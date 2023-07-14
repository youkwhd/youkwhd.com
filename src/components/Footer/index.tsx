/* [Legacy]
 * As of now, v2 does not implement footer
 */
import Link from "next/link"
import Banner from "@/src/components/Banner"
import type { Banner as BannerType } from "@/lib/banner"

export default (): JSX.Element => {
    return (
        <footer>
            <div className="footer--item-wrapper footer--item-wrapper--left">
                <small>
                    <Link href="https://github.com/youkwhd/youkwhd.com" target="_blank" rel="noreferrer noopener">
                        Source Code
                    </Link>
                </small>
                <br />
                <small>
                    <Link href="/rss.xml">
                        RSS
                    </Link>
                </small>
            </div>
            <div className="footer--item-wrapper footer--item-wrapper--right">
                <small>
                    Free from Javascript
                </small>
                <br />
                <small>
                    <Link href="https://youkwhd.my.id" target="_blank" rel="noreferrer noopener">
                        Portfolio
                    </Link>
                </small>
            </div>
        </footer>
    )
}

// type Props = { banners: BannerType[] }
// export default ({ banners }: Props): JSX.Element => {
//     return (
//         <footer>
//             <hr/>
//             <p>go back to the <Link href="/">homepage</Link> | updates via <Link href="/rss.xml">rss</Link></p>
//             <div className="banner-wrapper">
//                 {banners.map((banner: BannerType) => <Banner src={banner.src} href={banner.url} key={banner.index} />)}
//             </div>
//         </footer>
//     )
// }
