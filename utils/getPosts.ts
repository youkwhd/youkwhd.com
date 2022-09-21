import fs from "fs"
import { join } from "path"
import type { Post } from "@/src/types"
import matter, { GrayMatterFile } from "gray-matter"

const postsDir: string = join(process.cwd(), "src/_posts")
const postFiles: string[] = fs.readdirSync(postsDir)
const postSlugs: string[] = postFiles.map((file: string) => file.replace(/\.md$/, ""))

const parsePostTag = (tag: string): string => tag.replace(/[\s./]/, "-")

const getPostBySlug = (slug: string): Post => {
    const postPath: string = join(postsDir, `${slug}.md`)
    const postContent: string = fs.readFileSync(postPath, "utf8")
    const { data, content }: GrayMatterFile<string> = matter(postContent)

    // e.g. ["software-development"]: "software development"
    const tags: { [key: string]: string } = {} 
    data.tags.forEach((tag: string) => {
        const parsedTag: string = parsePostTag(tag)
        tags[parsedTag] = tag
    })

    return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        sidenote: data.sidenote,
        date: data.date,
        content,
        tags
    }
}

const getAllPosts = (): Post[] => {
    return postSlugs 
        .map((slug: string): Post => getPostBySlug(slug))
        .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1))
}

export {
    getPostBySlug,
    getAllPosts
}
