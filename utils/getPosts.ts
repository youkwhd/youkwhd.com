import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    // lowercase all tags, just to be sure. in case i did something stupid
    data.tags = data.tags.map((tag: string) => tag.toLowerCase());

    // parsing tags
    const parseTag = (tag: string) => {
        // TODO: make it one line, learn how to regex.
        tag = tag.replaceAll(" ", "-");
        tag = tag.replaceAll("/", "-");
        tag = tag.replaceAll(".", "-");
    
        return tag;
    };
    
    const parsedTags = data.tags.map((tag: string) => parseTag(tag));

    // temp object to hold queried fields
    type Items = { [key: string]: string }
    const items: Items = {};

    // this sort does things like graphql, you'll get what you
    // include in the fields array
    fields.forEach((field) => {
        // redirect slug to not return the file extension
        if (field === 'slug') items[field] = realSlug;

        // redirect content to pass the content made by matter
        if (field === 'content') items[field] = content;

        if (field === 'parsedTags') items[field] = parsedTags;

        // this is where all the field being passed to the items object
        if (typeof data[field] !== 'undefined') items[field] = data[field];
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    // get all slugs
    const slugs = getPostSlugs();

    // get all posts by each slugs
    // then sort it out by date
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}
