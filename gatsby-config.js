/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

//Envinroment variables
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Michelle Tanzil's Portfolio",
    description: "This is the portfolio site for Michelle Tanzil",
    author: "Michelle Tanzil",
    twitterUsername: "@codes_michelle",
    image: "/twitter-img.png",
    siteUrl: "https://tanzil.dev/",
    keywords:
      "software, developer, dev, full stack, builder, problem solver, Michelle, Tanzil",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          about: require("./src/schemas/about.json"),
          projects: require("./src/schemas/projects.json"),
          blog: require("./src/schemas/blog.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\: 400, 700`,
          `Open Sans`,
          `Noto Sans`,
          `Raleway`,
          `Helvetica`,
        ],
      },
    },
  ],
}
