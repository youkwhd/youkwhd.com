const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // define the blog template
    const blogTemplate = path.resolve("./src/templates/BlogPosts.jsx");

    // get all markdown posts. sorted by date
    const result = await graphql(`
        query {
            allMdx(sort: {fields: [frontmatter___date], order: ASC}) {
                nodes {
                    frontmatter {
                        title
                    }
                    slug
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(
            "there was an error loading your blog posts", result.errors
        );
        return;
    }

    const posts = result.data.allMdx.nodes;

    if (posts.length > 0) {
        posts.forEach((post) => {
            createPage({
                path: post.slug,
                component: blogTemplate,
                context: {
                    slug: post.slug,
                },
            });
        });
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: "slug",
            node,
            value,
        });
    }
};