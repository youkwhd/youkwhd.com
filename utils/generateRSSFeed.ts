import fs from "fs";
import { Feed } from "feed";
import { Post } from "../types";
import { markdownToHTML } from "./markdownConverter";

type TempPost = Post & {
    htmlContent?: string;
}

// TODO: update types
export async function generateRSSFeed(posts: Post[]): Promise<boolean> {
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

    // convert markdown to HTML
    let tempPosts: TempPost[] = posts;
    for (let i = 0; i < posts.length; i++) {
        const htmlContent: string = await markdownToHTML(posts[i].content);
        tempPosts[i]["htmlContent"] = htmlContent;
    }
    
    tempPosts.forEach((post: TempPost): void => {
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
