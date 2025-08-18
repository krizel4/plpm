import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Hero.module.css'
import Button from '../Button'
import { Link } from 'gatsby'
import { toOptimizedImage } from '../../helpers/general'

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
    header
  } = props

  const videoURL = props.video || props.videoURL

  return (
    <div className={styles.root}>
      {/* background image or video */}
      {!videoURL && image && (
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${toOptimizedImage(image)})` }}
          aria-hidden="true"
        />
      )}
      {videoURL && (
        <div
          className={`${styles.bg} ${styles.videoContainer}`}
          aria-hidden="true"
        >
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

      <div className={styles.overlay} aria-hidden="true" />

      {/* Foreground content */}
      <div className={styles.content} style={{ maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {ctaText && (
          <Button
            className={`${styles.ctaButton} ${ctaStyle}`}
            level="primary"
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
}
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaAction: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ctaStyle: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaTo: PropTypes.string,
  header: PropTypes.string,
  video: PropTypes.string,
  videoURL: PropTypes.string
}

export default Hero