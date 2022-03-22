import fs from "fs";
import { join } from "path";
import type { Banner } from "../types";

const bannersDirectory: string = join(process.cwd(), "public/images/banners");

export const getAvailableBanners = (): string[] => fs.readdirSync(bannersDirectory);

export const parseBanner = (banner: string): Banner => {
    const tempBanner: string[] = banner.split("[-]");
    let unparsedUrl: string = tempBanner[1];

    // TODO: learn RegExp ;-;
    while (unparsedUrl.includes("[slash]")) 
        unparsedUrl = unparsedUrl.replace("[slash]", "/");

    unparsedUrl = unparsedUrl.replace("[http]", "http://");
    unparsedUrl = unparsedUrl.replace("[https]", "https://");
    unparsedUrl = unparsedUrl.replace(/\.gif$/, "");
    unparsedUrl = unparsedUrl.replace(/\.png$/, "");

    return {
        index: +tempBanner[0],
        publicSrc: `/images/banners/${banner}`,
        url: unparsedUrl
    };
};

export const getAllBanners = (): Banner[] => {
    const banners: string[] = getAvailableBanners();
    let parsedBanners: Banner[] = [];

    for (let i = 0; i < banners.length; i++) {
        const tempBanner: Banner = parseBanner(banners[i]);
        parsedBanners.push(tempBanner);
    }

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index);
};
