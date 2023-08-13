import { defineConfig } from "astro/config"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"

export default defineConfig({
	site: "https://youkwhd.com",
	integrations: [],
    markdown: {
        syntaxHighlight: "prism",
        rehypePlugins: [
            rehypeSlug,
            // I want to deactivate this as for now
            // () => rehypeAutolinkHeadings({ behavior: "wrap", properties: { "class": "anchor-no-decor" } }),
        ],
    },
})
