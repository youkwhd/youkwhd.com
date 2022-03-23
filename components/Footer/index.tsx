import Link from "next/link";
import Banner from "../Banner";
import { Banner as BannerType } from "../../types";

/* 
 * TODO: automate image imports
 *
 * images and GIFs should have it's url as the name, https://youkwhd.com.gif
 * make an utility helper for getting all images and GIFs.
 *
 * it is also a problem when sorting it, so the name of the file should contain numbers.
 * this can be achieved by specifying a number sepereated by "-": 0-https://youkwhd.com.gif
 *
 */

type Props = {
    banners: BannerType[];
};

const Footer = ({ banners }: Props): JSX.Element => {
    return (
        <footer>
            <hr/>
            <p>go back to the <Link href="/"><a>homepage</a></Link> | about</p>
            <div className="banner-wrapper">
                {banners.map((banner: BannerType) => <Banner imageSrc={banner.publicSrc} href={banner.url} key={banner.index} />)}
            </div>
        </footer>
    );
};

export default Footer;
