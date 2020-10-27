// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
// require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
// })

export default {
  pathPrefix: '/bp',
  siteMetadata: {
    title: `Boilerplate`,
    siteUrl: 'https://gatsby.boilerplate',
    description: 'Boilerplate',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "graphql",
        fieldName: "gcms",
        url: "https://api-eu-central-1.graphcms.com/v2/ckgnfzkphu0qi01xk02aybkhn/master",
      },
    },
  ],
};