require('dotenv').config();
const PREVIEW_SECRET = process.env.CONTENTFUL_PREVIEW_SECRET;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulLandingPage {
        nodes {
          slug
        }
      }
    }
  `);

  const pages = result.data.allContentfulLandingPage.nodes;

  pages.forEach((page) => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve(`./src/templates/landing-page.tsx`),
      context: {
        slug: page.slug,
      },
    });
  });
};

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
        accessToken: process.env.GATSBY_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        host: process.env.GATSBY_CONTENTFUL_HOST, 
      },
    },
    // other plugins...
  ],
  flags: {
    THE_FLAG: false,
  }
};