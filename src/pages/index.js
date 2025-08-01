
import * as React from 'react';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';

import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom hideNav hideFooter>
      <Hero
        video={
          "https://videos.ctfassets.net/xuyebjupxu9b/72OvQuEdJ6iIkvtw6EKK9K/008c4f3406edc4fdf9da2004532501f5/pretty-little-poppy-marketplace-lancaster-ca.mp4"
        }
        title={"Pretty Little Poppy is Sprouting Soon!"}
        subtitle={
          <>
            Launching 8/8! <br /> Until then, stop by our store to support AV's
            finest creators and makers.
          </>
        }
        ctaText={
          <a
            href="https://www.instagram.com/prettylittlepoppy.av/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Updates from Instagram
          </a>
        }
      />
    </Layout>
  );
};

export default IndexPage;
