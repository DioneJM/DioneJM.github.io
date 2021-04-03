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
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    posts: require.resolve("./src/components/blog/post.js")
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
