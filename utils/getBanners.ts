import fs from "fs";
import { join } from "path";

const bannersDirectory: string = join(process.cwd(), "public/images/banners");

// TODO: export this type
type ParsedBanner = {
    index: number;
    publicSrc: string,
    url: string;
};

export const getAvailableBanners = (): string[] => fs.readdirSync(bannersDirectory);

export const parseBanner = (banner: string): ParsedBanner => {
    // const tempBanner: FixedLengthArray<[string, string]> = banner.split("[-]");
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
}

export const getAllBanners = (): ParsedBanner[] => {
    const banners: string[] = getAvailableBanners();
    let parsedBanners: ParsedBanner[] = [];

    for (let i = 0; i < banners.length; i++) {
        const tempBanner: ParsedBanner = parseBanner(banners[i]);
        parsedBanners.push(tempBanner);
    }

    return parsedBanners.sort((banner1, banner2) => banner1.index - banner2.index);
}
