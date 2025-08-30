import React from "react";
import { navigate } from "gatsby";

import BlogPreviewGrid from "../../components/BlogPreviewGrid";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import ThemeLink from "../../components/ThemeLink";

import { generateMockBlogData } from "../../helpers/mock";
import * as styles from "./index.module.css";
import { toOptimizedImage } from "../../helpers/general";

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          image={toOptimizedImage(
            "https://images.ctfassets.net/xuyebjupxu9b/2VZ1I8yzTtHh12m8p2ZaTE/28790671434e620d75f49920c49d9e0c/Pretty-little-poppy-marketplace-Lancaster-ca-antelope-valley-enhanced.png"
          )}
          title={`Thrive Guide`}
          subtitle={`Guidance, Growth and Community`}
        />
        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate("/blog/sample")}
            to={"/blog/sample"}
          >
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate("/blog/sample")}
            to={"/blog/sample"}
          >
            Business
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate("/blog/sample")}
            to={"/blog/sample"}
          >
            Marketing
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate("/blog/sample")}
            to={"/blog/sample"}
          >
            AV Life
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate("/blog/sample")}
            to={"/blog/sample"}
          >
            Minors to Majors
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={"large"}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
