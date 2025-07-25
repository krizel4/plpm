import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/plpm_logo.png'}
        title={'Hey - you found us!'}
        subtitle={`Pardon are virtual dust, we're still under construction. Come back and see us soon!`}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          <span className={styles.gold}>UPCOMING 2025 EVENTS</span>
        </p>
        <ul>
          <li>Saturday, September 6: Pretty "Lit" Poppy</li>
          <li>Saturday, October 25: Fall Festival</li>
          <li>Saturday, November 29: Bears. Beets. (Small) Business Saturday</li>
          <li>Saturday, December 13: Poppies & Pinecones</li>
        </ul>
        <p>
          wear by <span className={styles.gold}>sunspel</span> and{' '}
          <span className={styles.gold}>scotch&soda</span>
        </p>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;