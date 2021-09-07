module.exports = {
  siteMetadata: {
    title: `youkwhd`,
    author: {
      name: `youkwhd`,
      summary: `a self-taught developer`
    },
    description: `brand new blog as a journey of a self-taught dev`,
    siteUrl: `https://youkwhd.github.io/`,
    social: {
      twitter: `youkwhd`,
      instagram: `youkwhd`,
      github: `youkwhd`,
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      }
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/content/posts`,
    //   }
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 632,
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // for dynamic image
  ],
}
