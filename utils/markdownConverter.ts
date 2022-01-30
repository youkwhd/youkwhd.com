/*
 * markdownToHTML => gets a markdown content (type string) to be converted to html
 * e.g. markdown content; "hello, **world**"
 *
 */

import { remark } from "remark";
import remarkHtml from "remark-html";

export async function markdownToHTML(markdown: string) {
    return (await remark().use(remarkHtml).process(markdown)).toString();
}
