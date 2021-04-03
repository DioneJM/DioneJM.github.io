module.exports = {
    siteMetadata: {
        title: "localhost:3000",
        author: "Dione M",
        description: "site metadata description",
        siteUrl: "https://localhost3000.link/",
        social: [
            {
                name: "My github",
                url: "https://github.com/DioneJM",
            },
        ],
    },
  plugins: [
    `gatsby-plugin-styled-components`,
      {
          resolve: 'gatsby-plugin-material-ui',
          // If you want to use styled components you should change the injection order.
          options: {
              stylesProvider: {
                injectFirst: true,
              },
          },
      },
      `gatsby-plugin-mdx`,
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'posts',
              path: `${__dirname}/src/pages/posts`,
          },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
