/*
 * markdownToHTML => gets a markdown content (type string) to be converted to html
 * e.g. markdown content; "hello, **world**"
 *
 */

import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkToc from "remark-toc";

import { rehype } from "rehype";
import rehypeSlug from "rehype-slug";

export async function addIDToHTML(html: string) {
    return (await rehype().data("settings", { fragment: true }).use(rehypeSlug).process(html)).toString();
}

export async function markdownToHTML(markdown: string) {
    const convertedHTML = (await remark().use(remarkToc).use(remarkHtml).process(markdown)).toString();
    return addIDToHTML(convertedHTML);
}

