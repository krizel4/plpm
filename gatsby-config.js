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
