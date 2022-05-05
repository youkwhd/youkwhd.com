import fs from "fs";
import { join } from "path";
import { Banner } from "../types";
import replaceString from "./replaceString";

const bannersDirectory: string = join(process.cwd(), "public/images/banners");

const getAllBanners = (): Banner[] => {
	const banners: string[] = fs.readdirSync(bannersDirectory);

    let parsedBanners: Banner[] = [];
    banners.forEach((banner: string): void => {
        const tempBanner: Banner = parseBanner(banner);
        parsedBanners.push(tempBanner);
    });

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index);
};

const parseBanner = (banner: string): Banner => {
	const tempBanner: string[] = banner.split("[-]");

    let tempUrl: string = tempBanner[1];
    // this could be done in one line but fucking me too lazy lol
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
