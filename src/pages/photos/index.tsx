import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import NavigationBar from "@/src/components/NavigationBar"

export const config: PageConfig = { unstable_runtimeJS: false }

export default (): JSX.Element => {
    return (
        <>
            <NextSeo
                title="photos of me"
            />
            <h1>Photos of Me</h1>
            <NavigationBar />

            <p>I don't know, this is Instagram-like page I suppose. Also it is an archive of some of my public selfies.</p>

            <div>
                <img src="/images/me/img_1941.jpg" alt="" loading="lazy" width={300} height={400} />
                <br />
                <small>University Toilet: During Covid19</small>
            </div>
            <br />

            <div>
                <img src="/images/me/img_8745.jpg" alt="" loading="lazy" width={300} height={260} />
                <br />
                <small>Before University</small>
            </div>
            <br />

            <div>
                <img src="/images/me/img_6044.jpg" alt="" loading="lazy" width={300} height={326} />
                <br />
                <small>Old, I don't remember when</small>
            </div>
            <br />

            <div>
                <img src="/images/me/img_3522.jpg" alt="" loading="lazy" width={300} height={270} />
                <br />
                <small>Me, and my eyes</small>
            </div>
            <br />
        </>
    )
}
