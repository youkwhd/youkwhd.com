import fs from "fs";
import { join } from "path";
import { Post } from "../types";
import matter from "gray-matter";
import replaceString from "./replaceString";

const postsDirectory: string = join(process.cwd(), "_posts");

const getPostFiles = (): string[] => fs.readdirSync(postsDirectory);

const getPostBySlug = (fileSource: string): Post => {
    const slug: string = fileSource.replace(/\.md$/, "");
    const fullPath: string = join(postsDirectory, `${slug}.md`);
    const postContent: string = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(postContent);
    const parsedTags: string[] = data.tags.map((tag: string): string => parsePostTag(tag));

    return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        content,
        tags: data.tags,
        parsedTags
    };
};

const getAllPosts = (): Post[] => {
    const postFiles: string[] = getPostFiles();

    const posts = postFiles
        .map((fileSource) => getPostBySlug(fileSource))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
};

const parsePostTag = (tag: string): string => {
    // TODO: make it one line, learn how to regex.
    tag = replaceString(tag, " ", "-");
    tag = replaceString(tag, "/", "-");
    tag = replaceString(tag, ".", "-");

    return tag;
};


export {
    getPostFiles,
    getPostBySlug,
    getAllPosts
};
