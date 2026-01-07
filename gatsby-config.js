require('dotenv').config();

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
        // Use preview token if host is preview, otherwise use regular access token
        accessToken: process.env.GATSBY_CONTENTFUL_HOST === 'preview.contentful.com' 
          ? process.env.GATSBY_CONTENTFUL_PREVIEW_ACCESS_TOKEN 
          : process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        ...(process.env.GATSBY_CONTENTFUL_PREVIEW_ACCESS_TOKEN && {
          previewAccessToken: process.env.GATSBY_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        }),
        ...(process.env.GATSBY_CONTENTFUL_HOST && {
          host: process.env.GATSBY_CONTENTFUL_HOST,
        }),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
  flags: {
    THE_FLAG: false,
  }
};