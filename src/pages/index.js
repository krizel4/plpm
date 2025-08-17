
import * as React from 'react';
import { Link } from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import { CalendarApp } from '../components/Calendar/Calendar';
import Button from '../components/Button';

import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      <Hero
        video={
          "https://videos.ctfassets.net/xuyebjupxu9b/72OvQuEdJ6iIkvtw6EKK9K/008c4f3406edc4fdf9da2004532501f5/pretty-little-poppy-marketplace-lancaster-ca.mp4"
        }
        title={"Where Small \n Businesses Blossom"}
        // subtitle={<>Sell, connect, and thrive...<br/>because together, we grow.</>}
        ctaText={
          <a href="#upcoming-events" className={styles.primary}>
            Check out our future events
          </a>
        }
      />
        <div className={styles.calendarContainer}>
          <CalendarApp />
        </div>
    </Layout>
  );
};

export default IndexPage;
