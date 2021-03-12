module.exports = {
    siteMetadata: {
        title: "localhost:3000",
        author: "Dione M",
        description: "site metadata description",
        siteUrl: "https://localhost3000.link/",
        social: [
            {
                name: "github",
                url: "https://github.com/DioneJM",
            },
        ],
    },
    plugins: [
        {
            resolve: `gatsby-theme-blog`,
            options: {
                // basePath defaults to `/`
                basePath: `/blog`,
            },
        },
    ],
}