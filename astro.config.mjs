import { defineConfig } from "astro/config"
import { rehypeHeadingIds } from '@astrojs/markdown-remark'

export default defineConfig({
	site: "https://youkwhd.com",
	integrations: [],
    markdown: {
        syntaxHighlight: "prism",
        rehypePlugins: [
            rehypeHeadingIds,
        ],
    },
})
