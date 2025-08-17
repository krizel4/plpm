import React, { useRef } from 'react';

import Button from '../components/Button';
import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';
import InstagramEmbed from "../components/InstagramEmbed";

import * as styles from './about.module.css';

const AboutPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          title={`Minors to Majors Program`}
          maxWidth={"1024"}
          image={
            "https://images.ctfassets.net/xuyebjupxu9b/1zCMd7hRXi8wtOUORzYtvz/df7905f43479bcd9bed83609c5f547a6/m2m-banner.png"
          }
        />

        <Container size={"large"} spacing={"min"}>
          <div className={styles.content}>
            <span className={styles.h3plustext}>
              <h3>Minors to Majors</h3>
              <br />
              <p>
                Pretty Little Poppy Marketplace’s Minors to Majors youth program
                gives local young creators the tools, knowledge, and
                opportunities to explore entrepreneurship. Participants learn
                the basics of building a small business, from product
                development to customer engagement, and gain real experience by
                selling their work in our marketplace. The program also connects
                them with other motivated youth, building a supportive network
                where ideas and skills can grow. It’s a hands-on way to help the
                next generation turn their creativity into confidence and
                impact.
              </p>
              <Button
                level="primary"
                className={styles.centerButton}
                href="/youngpreneurs-program-antelope-valley-ca"
              >
                Find Out More
              </Button>
            </span>
            <InstagramEmbed
              url="https://www.instagram.com/p/C8zuHmVP7gS/"
              style={"display: block; margin: 0 auto"}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;
