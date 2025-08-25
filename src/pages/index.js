import * as React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'
import { CalendarApp } from '../components/Calendar/Calendar'
import { Helmet } from "react-helmet";

import * as styles from './index.module.css'

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      <Helmet>
        <title>Pretty Little Poppy Marketplace | Lancaster, CA</title>
        <meta
          name="description"
          content="Pretty Little Poppy Marketplace is where small businesses blossom. Join us for pop-up events, handmade goods, and community in Lancaster, CA."
        />
        <meta property="og:title" content="Pretty Little Poppy Marketplace" />
        <meta
          property="og:description"
          content="Discover handmade items, local creators, and family-friendly events in Lancaster, CA."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.prettylittlepoppymarketplace.com/"
        />
        <meta
          property="og:image"
          content="https://www.prettylittlepoppymarketplace.com/og-preview.jpg"
        />
      </Helmet>
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
}

export default IndexPage
