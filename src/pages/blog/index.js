import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.blogContainer}>
        <div className={styles.content}>
          <h3>Our Blog is Blooming Soon!</h3>
          <p>
            We’re getting ready to fill this space with resources, tips, and
            ideas to help small businesses thrive—whether you’re selling from a
            shelf, at a pop-up, or building your brand from scratch.{" "}
          </p>

          <p>
            From marketing know-how to vendor hacks, we’ve got you covered.{" "}
          </p>

          <p>Check back soon for fresh content designed to help you grow.</p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
