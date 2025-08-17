import React from "react";
import * as styles from "./index.module.css";

import Blog from "../../components/Blog";
import Container from "../../components/Container";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button"

import { toOptimizedImage } from "../../helpers/general";

const Events = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={"events"}
              title={"Upcoming Event"}
              image={
                "https://images.ctfassets.net/xuyebjupxu9b/3IVS7f5N8YOvSjFNs0XR6h/449eb433fb7b31debc1395c8b7216738/Celebrating_Literacy.png"
              }
              alt={
                "Flyer for Pretty Lit Poppy - September 6, 2025 Event at Pretty Little Poppy Marketplace in Lancaster, CA"
              }
            >
              <div className={styles.content}>
                <p>
                  📚 Celebrate the joy of reading at{" "}
                  <strong>Pretty “Lit” Poppy</strong> — a pop-up made for
                  curious minds and creative hearts!
                </p>
                <p>
                  Families can swap books, design their own bookmarks, paint a
                  playful Dr. Seuss-inspired scene, and gather for a cozy
                  reading circle.
                </p>
                <p>
                  It’s a fun and festive way to honor literacy, spark
                  imagination, and support local makers — all in one memorable
                  day!
                </p>

                <hr />

                <h3>Join as a Vendor</h3>
                <Button
                  level="primary"
                  className={styles.centerButton}
                  href="/join-pop-up"
                >
                  Apply Today
                </Button>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Events;
