import React, { useEffect, Link } from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'

import * as styles from './index.module.css'

export default function IndexPage () {
  useEffect(() => {
    if (typeof window === 'undefined') return // SSR guard (Gatsby/Next)

    const src = 'https://tally.so/widgets/embed.js'
    const existing = document.querySelector(`script[src="${src}"]`)

    const onload = () => {
      // initialize/refresh embeds
      if (window.Tally?.loadEmbeds) window.Tally.loadEmbeds()
      else {
        // fallback: set src from data- attribute if the helper didn't load
        document
          .querySelectorAll('iframe[data-tally-src]:not([src])')
          .forEach((el) => (el.src = el.dataset.tallySrc))
      }
    }

    if (existing) {
      onload()
    } else {
      const s = document.createElement('script')
      s.src = src
      s.async = true
      s.onload = onload
      s.onerror = onload
      document.body.appendChild(s)
    }
  }, [])

  return (
    <Layout>
      <div className={styles.generalContainer}>
        <h3>Pretty Lit 📚 Poppy Pop-up Agreement</h3>
        <p>
          {' '}
          We're so excited you're interested in joining our upcoming pop-up!</p>
          <p> To officially join the pop-up on Saturday, September 6, please complete the contract below and submit your payment. A notification will be sent to the event coordinator to confirm the receipt of your submission.
        </p>
        <hr />
        <iframe
          data-tally-src="https://tally.so/embed/nWWAgQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="auto"
          frameBorder="0"
          title="Pretty Lit Poppy - External Vendor Agreement"
        />
      </div>
    </Layout>
  )
}
