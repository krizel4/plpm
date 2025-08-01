import React from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';
import { toOptimizedImage } from '../../helpers/general';

const Hero = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;
  
  const videoURL = props.video || props.videoURL;
  return (
    <div
      className={styles.root}
      style={
        !videoURL ? { backgroundImage: `url(${toOptimizedImage(image)})` } : {}
      }
    >
      {videoURL && (
        <div className={styles.videoContainer}>
          <video
            className={styles.videoBackground}
            src={videoURL}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}

      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {ctaText && (
          <Button
            className={`${styles.ctaButton} ${ctaStyle}`}
            level={"primary"}
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLink} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
