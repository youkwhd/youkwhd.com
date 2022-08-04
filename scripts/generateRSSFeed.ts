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

    posts.forEach(async (post: Post) => {
        const postURL: string = `${SITE_URL}/blog/${post.slug}`;

        feed.addItem({
            title: post.title,
            id: postURL,
            link: postURL,
            description: post.excerpt,
            content: await markdownToHTML(post.content),
            author: [author],
            date: new Date(post.date)
        });
    });

    fs.writeFileSync("./public/rss.xml", feed.rss2());
};
