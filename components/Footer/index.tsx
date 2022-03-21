import Link from "next/link";

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
const Footer = (): JSX.Element => {
    return (
        <footer>
            <hr/>
            <p>go back to the <Link href="/"><a>homepage</a></Link> | about</p>
            <div className="banner-wrapper">
                <img src="/images/banners/elescrotodeinternet-blackgnu-banner-88x31.png" alt="j" />
                <img src="/images/banners/kill9.png" alt="j" />
                <img src="/images/banners/4gentoo.png" alt="j" />
                <img src="/images/banners/bigdeeper.png" alt="j" />
                <img src="/images/banners/spywarewatchdog.png" alt="j" />

                <img src="/images/banners/discord-no-way_banner.gif" alt="g"/>
                <img src="/images/banners/edited-with-vim_banner.gif" alt="g"/>
                <img src="/images/banners/theoldnetanimblur2.gif" alt="g"/>
                <img src="/images/banners/landchad.gif" alt="g"/>
                <img src="/images/banners/wiby.gif" alt="g"/>
            </div>
        </footer>
    );
};

export default Footer;
