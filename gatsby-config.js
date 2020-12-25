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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     //   contentTypes : `experiences`, `projects`, `blogs`,
    //     //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
    //     contentTypes: [`experiences`, `projects`],
    //     singleTypes: [`about`],
    //   },
    // },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          about: require("./src/schemas/about.json"),
          projects: require("./src/schemas/projects.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
          // {
          //   family: `Righteous`,
          //   variants: [`900`],
          // },
          // {
          //   family: `Cursive`,
          // },
        ],
      },
    },
  ],
}
