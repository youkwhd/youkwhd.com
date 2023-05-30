import fs from "fs"
import { join } from "path"
import matter, { type GrayMatterFile } from "gray-matter"

type Post = {
    slug: string
    title: string
    excerpt: string
    date: string
    content: string
    tags: { [key: string]: string }
}

const postsDir: string = join(process.cwd(), "assets/posts")
const postFiles: string[] = fs.readdirSync(postsDir).filter((file: string): boolean => file.endsWith(".md"))
const postSlugs: string[] = postFiles.map((file: string) => file.replace(/\.md$/, ""))

const parsePostTag = (tag: string): string => tag.replace(/[\s./]/, "-")

const getPostBySlug = (slug: string): Post => {
    const postPath: string = join(postsDir, `${slug}.md`)
    const postContent: string = fs.readFileSync(postPath, "utf8")
    const { data, content }: GrayMatterFile<string> = matter(postContent)

    // e.g. ["software-development"]: "software development"
    const tags: { [key: string]: string } = {} 
    data.tags.forEach((tag: string) => tags[parsePostTag(tag)] = tag)

    return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        content,
        tags
    }
}

const getAllPosts = (): Post[] => postSlugs
                                    .map((slug: string): Post => getPostBySlug(slug))
                                    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1))

export {
    getPostBySlug,
    getAllPosts,
    type Post
}
