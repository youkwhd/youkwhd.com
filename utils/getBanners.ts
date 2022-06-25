import fs from "fs";
import { join } from "path";
import { Banner } from "../types";

const getAllBanners = (): Banner[] => {
    const bannersDir: string = join(process.cwd(), "public/images/banners");
    const banners: string[] = fs.readdirSync(bannersDir);
    const parsedBanners: Banner[] = banners.map((b: string): Banner => parseBanner(b));

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index);
};

const parseBanner = (banner: string): Banner => {
    const tempBanner: string[] = banner.split("[-]");
    let tempUrl: string = tempBanner[1];

    tempUrl = tempUrl.replace(/\[slash\]/g, "/");
    tempUrl = tempUrl.replace(/\[http\]/g, "http://");
    tempUrl = tempUrl.replace(/\[https\]/g, "https://");
    tempUrl = tempUrl.replace(/\.gif/g, "");
    tempUrl = tempUrl.replace(/\.png/g, "");

    return {
        index: +tempBanner[0],
        src: `/images/banners/${banner}`,
        url: tempUrl 
    };
};

export {
    getAllBanners
};
