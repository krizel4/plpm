
import * as React from 'react';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';

import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom hideNav hideFooter>
      <Hero
        maxWidth={'500px'}
        image={'https://images.ctfassets.net/xuyebjupxu9b/6uPkrUykcG2pZlJ418JsFI/34cd32316bf3060d14a86e03228a4f19/Pretty-little-poppy-marketplace-Lancaster-ca-antelope-valley.png'}
        title={`We're on the Internet! \n Excuse our digital dust. \n Visit us again August '25.`}
      />
      {/* <div className={styles.messageContainer}>
        <p>
          This is a demonstration of the Sydney theme for verse by{' '}
          <span className={styles.gold}>matter design.</span>
        </p>
        <p>
          wear by <span className={styles.gold}>sunspel</span> and{' '}
          <span className={styles.gold}>scotch&soda</span>
        </p>
      </div> */}
    </Layout>
  );
};

export default IndexPage;
