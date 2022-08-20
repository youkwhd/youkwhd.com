import { unified } from "unified"

import remarkParse from "remark-parse"
import remarkToc from "remark-toc"
import remarkRehype from "remark-rehype"

import rehypeSlug from "rehype-slug"
import rehypePrism from "@mapbox/rehype-prism"
import rehypeStringify from "rehype-stringify"

export const markdownToHTML = async (markdown: string): Promise<string> => {
    return (await unified()
                    .use(remarkParse)
                    .use(remarkToc)
                    .use(remarkRehype)
                    .use(rehypeSlug)
                    .use(rehypePrism)
                    .use(rehypeStringify)
                    .process(markdown)).toString()
}

