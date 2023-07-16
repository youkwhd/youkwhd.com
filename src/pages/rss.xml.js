import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function get(context) {
	const articles = await getCollection("articles")
    // console.log(articles)

	return rss({
		title: "youkwhd",
		description: "youkwhd's page",
		site: context.site,
        items: [],
		// items: articles.map((article) => {
        //     // console.log(article.compiledContent())
        //     return {
        //         // ...article.data,
        //         // content: article.body,
        //         // link: `/articles/${article.slug}/`,
        //     }
        // }),
	})
}
