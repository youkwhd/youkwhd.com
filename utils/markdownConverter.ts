/*
 * markdownToHTML => gets a markdown content (type string) to be converted to html
 * e.g. markdown content; "hello, world" => <p>hello, world</p>
 *
 */
import { unified } from "unified";

import remarkParse from "remark-parse";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";

import rehypeSlug from "rehype-slug";
import rehypePrism from "@mapbox/rehype-prism"
import rehypeStringify from "rehype-stringify"

export async function markdownToHTML(markdown: string) {
    return (await unified()
                    .use(remarkParse)
                    .use(remarkToc)
                    .use(remarkRehype)
                    .use(rehypeSlug)
                    .use(rehypePrism)
                    .use(rehypeStringify)
                    .process(markdown)).toString();
}

