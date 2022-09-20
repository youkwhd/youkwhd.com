import fs from "fs"
import { join } from "path"
import type { Banner } from "@/src/types"

const getAllBanners = (): Banner[] => {
    const bannersDir: string = join(process.cwd(), "public/images/banners")
    const banners: string[] = fs.readdirSync(bannersDir)
    const parsedBanners: Banner[] = banners.map((b: string): Banner => parseBanner(b))

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index)
}

const parseBanner = (banner: string): Banner => {
    let [index, url]: string[] = banner.split("[-]")

    url = url.replace(/\[slash\]/g, "/")
    url = url.replace(/\[http\]/g, "http://")
    url = url.replace(/\[https\]/g, "https://")
    url = url.replace(/\.gif/g, "")
    url = url.replace(/\.png/g, "")

    return {
        index: +index,
        src: `/images/banners/${banner}`,
        url 
    }
}

export {
    getAllBanners
}
