import React, { useRef } from 'react';

import Button from '../components/Button';
import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';
import InstagramEmbed from "../components/InstagramEmbed";

import * as styles from './about.module.css';

const AboutPage = (props) => {
  let visionRef = useRef();
  let missionRef = useRef();
  let m2mRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          style={{ filter: "blur(4px)" }}
          title={`Pretty Little Poppy \n est. 2022`}
          maxWidth={"1024"}
          image={
            "https://images.ctfassets.net/xuyebjupxu9b/2VZ1I8yzTtHh12m8p2ZaTE/28790671434e620d75f49920c49d9e0c/Pretty-little-poppy-marketplace-Lancaster-ca-antelope-valley-enhanced.png"
          }
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(visionRef)} to={"#vision"}>
            Our Vision
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(missionRef)} to={"#mission"}>
            Our Mission
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(m2mRef)}
            to={"#majors"}
          >
            Our Impact
          </ThemeLink>
        </div>

        <Container size={"large"} spacing={"min"}>
          <div className={styles.detailContainer} ref={visionRef}>
            <h3>Our Vision is...</h3>
            <p>
              To see dreamers take root, grow as doers, and blossom into
              difference-makers &mdash; cultivating meaningful change in their
              communities.
            </p>
          </div>
        </Container>

        <div>
          <Hero video="https://videos.ctfassets.net/xuyebjupxu9b/4QdstqaZNnMw1U9XalDKmE/6f710ae260fbfd0cef225caf33a3f61a/pretty-little-poppy-marketplace-vendors.mp4" />
        </div>

        <Container size={"large"} spacing={"min"}>
          <div className={styles.content}>
            <h3>Our Mission</h3>
            <div ref={missionRef}>
              <p>
                Pretty Little Poppy Marketplace provides creators and small
                business owners with space, resources, and a supportive
                community to grow their craft, share their passion, and
                thrive—starting in Lancaster and blooming beyond.
              </p>
              <ol>
                <li>Dreamers</li>
                <li>Doers</li>
                <li>Difference-Makers</li>
              </ol>

              <Button 
                level="primary"
                className={styles.centerButton}
                href="/contact"
              >Join the Marketplace</Button>
            </div>
            <span className={styles.h3plustext} ref={m2mRef}>
              <h3>Minors to Majors</h3>
              <br />
              <p>
                Pretty Little Poppy Marketplace’s Minors to Majors youth program gives local
                young creators the tools, knowledge, and opportunities to
                explore entrepreneurship. Participants learn the basics of
                building a small business, from product development to customer
                engagement, and gain real experience by selling their work in
                our marketplace. The program also connects them with other
                motivated youth, building a supportive network where ideas and
                skills can grow. It’s a hands-on way to help the next generation
                turn their creativity into confidence and impact.
              </p>
              <Button
                level="primary" className={styles.centerButton}
                href="/youngpreneurs-program-antelope-valley-ca"
              >Find Out More</Button>
            </span>
            <InstagramEmbed
              url="https://www.instagram.com/reel/DCnWYt_ymvW/"
              style={"display: block; margin: 0 auto"}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;
