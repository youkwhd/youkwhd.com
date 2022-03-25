import fs from "fs";
import { join } from "path";
import { Banner } from "../types";

const bannersDirectory: string = join(process.cwd(), "public/images/banners");

type ReplaceString = {
    searchValue: string;
    replaceValue: string;
}

// TODO: learn RegExp, don't be lazy
// for now, it doesn't support regex
const replaces: ReplaceString[] = [
    {
        searchValue: "[slash]",
        replaceValue: "/"
    },
    {
        searchValue: "[http]",
        replaceValue: "http://"
    },
    {
        searchValue: "[https]",
        replaceValue: "https://"
    },
    {
        searchValue: ".gif",
        replaceValue: ""
    },
    {
        searchValue: ".png",
        replaceValue: ""
    },
];


export const getAvailableBanners = (): string[] => fs.readdirSync(bannersDirectory);

export const getAllBanners = (): Banner[] => {
    const banners: string[] = getAvailableBanners();
    let parsedBanners: Banner[] = [];

    banners.forEach((banner: string): void => {
        const tempBanner: Banner = parseBanner(banner, replaces);
        parsedBanners.push(tempBanner);
    });

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index);
};

const parseBanner = (banner: string, replaces: ReplaceString[]): Banner => {
    const tempBanner: string[] = banner.split("[-]");
    let unparsedUrl: string = tempBanner[1];

    replaces.forEach((r: ReplaceString): void => {
        while (unparsedUrl.includes(r.searchValue)) {
            unparsedUrl = unparsedUrl.replace(r.searchValue, r.replaceValue);
        }
    });

    return {
        index: +tempBanner[0],
        publicSrc: `/images/banners/${banner}`,
        url: unparsedUrl
    };
};
