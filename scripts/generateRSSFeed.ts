import fs from "fs";
import { Feed } from "feed";
import { Post } from "../types";
import { markdownToHTML } from "../utils/markdownConverter";

// refer to https://github.com/jpmonette/feed
export const generateRSSFeed = async (posts: Post[]): Promise<void> => {
    const PROTOCOL = "https://";
    const HOSTNAME = "youkwhd.vercel.app";
    const SITE_URL = PROTOCOL + HOSTNAME;

    const dateToday: Date = new Date();
    const author: { name: string; email: string; } = {
        name: "youkwhd",
        email: "lolywk@tutanota.com"
    };

    // config
    const feed: Feed = new Feed({
        title: `${author.name}'s blog posts`,
        description: `an archive consist of articles from ${author.name}'s site`,
        author,
        id: SITE_URL,
        link: SITE_URL,
        language: "en",
        updated: dateToday,
        copyright: `All rights reserved ${dateToday.getFullYear()}, ${author.name}`,
        feedLinks: {
            rss2: `${SITE_URL}/rss.xml`,
        },
    });

    // create rss
    for (let i = 0; i < posts.length; i++) {
        const postURL: string = `${SITE_URL}/blog/${posts[i].slug}`;
        const htmlContent: string = await markdownToHTML(posts[i].content);

        feed.addItem({
            title: posts[i].title,
            id: postURL,
            link: postURL,
            description: posts[i].excerpt,
            content: htmlContent,
            author: [author],
            date: new Date(posts[i].date)
        });
    };

    fs.writeFileSync("./public/rss.xml", feed.rss2());
};
