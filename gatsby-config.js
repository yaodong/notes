module.exports = {
  siteMetadata: {
    title: `Site title`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
          },
        ],
      },
    }
  ],
}
