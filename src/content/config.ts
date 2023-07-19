import { defineCollection, z } from "astro:content"

/* should be named article as this is a single object,
 * this case, it cannot be so, since Astro syncs the object name
 * relative to the directory name.
 */
const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
})

export const collections = { posts }