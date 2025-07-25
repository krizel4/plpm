require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Pretty Little Poppy Marketplace | Antelope Valley, CA`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [ {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.GATSBY_CONTENTFUL_HOST, 
      },
    },
    // other plugins...
  ],
  flags: {
    THE_FLAG: false,
  }
};
