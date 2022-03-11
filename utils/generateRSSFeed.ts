import { Feed } from "feed";
import fs from "fs";
import type { PostType } from "../types/post";
import { markdownToHTML } from "./markdownConverter";

// TODO: update types
export async function generateRSSFeed(posts: any) {
    const PROTOCOL = "https://";
    const HOSTNAME = "youkwhd.vercel.app";
    const SITE_URL = PROTOCOL + HOSTNAME;

    const dateToday = new Date();

    const author = {
        name: "youkwhd",
        email: "lolywk@tutanota.com"
    };

    const feed = new Feed({
        title: "youkwhd's blog posts",
        description: "an archive consist of articles from youkwhd's site",
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

    // convert markdown to HTML
    let tempPosts = posts;
    for (let i = 0; i < posts.length; i++) {
        const htmlContent = await markdownToHTML(posts[i].content || "");
        tempPosts[i]["htmlContent"] = htmlContent;
    }

    tempPosts.forEach((post: any) => {
        const postURL: string = `${SITE_URL}/blog/${post.slug}`;

        feed.addItem({
            title: post.title,
            id: postURL,
            link: postURL,
            description: post.excerpt,
            content: post.htmlContent,
            author: [author],
            date: new Date(post.date)
        });
    });

    fs.writeFileSync("./public/rss.xml", feed.rss2());
    return true;
}
