import fs from "fs";
import { join } from "path";
import { Banner } from "../types";
import replaceString from "./replaceString";

const getAllBanners = (): Banner[] => {
	const bannersDir: string = join(process.cwd(), "public/images/banners");
	const banners: string[] = fs.readdirSync(bannersDir);
    const parsedBanners: Banner[] = banners.map((b: string): Banner => parseBanner(b));

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index);
};

const parseBanner = (banner: string): Banner => {
	const tempBanner: string[] = banner.split("[-]");
    let tempUrl: string = tempBanner[1];

    tempUrl = replaceString(tempUrl, "[slash]", "/");
    tempUrl = replaceString(tempUrl, "[http]", "http://");
    tempUrl = replaceString(tempUrl, "[https]", "https://");
    tempUrl = replaceString(tempUrl, ".gif", "");
    tempUrl = replaceString(tempUrl, ".png", "");

    return {
        index: +tempBanner[0],
        src: `/images/banners/${banner}`,
        url: tempUrl 
    };
};

export {
    getAllBanners
};
