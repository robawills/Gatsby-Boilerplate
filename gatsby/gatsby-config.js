// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

export default {
  pathPrefix: '/bp',
  siteMetadata: {
    title: "Boilerplate",
    description: "Gatsby & Strapi",
    author: "Rob Wills",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    
    {
        resolve: 'gatsby-source-strapi',
        options: {
            apiURL: process.env.API_URL || "http://localhost:1337",
            contentTypes: [
            // List of the Content Types you want to be able to request from Gatsby.
            'article',
            //'home-page',
            'user'
          ],
          singleTypes: ["home-page"],
          queryLimit: 1000,
        },
    },
    'gatsby-plugin-offline',
  ],

};