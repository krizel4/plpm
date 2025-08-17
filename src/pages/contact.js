import React, { useRef } from 'react'

import Layout from '../components/Layout/Layout'
import * as styles from '../components/Contact/Contact.module.css'

const ContactPage = () => {
  return (
    <Layout disablePaddingBottom>
       <div className={styles.root}>

          <h4>You're about to make our inbox a happier place.</h4>
          <p>
            Our tiny team is working hard to keep the poppies blooming, so
            please allow up to 2 business days for a response.
          </p>

          <p
            style={{
              textAlign: 'center',
              padding: '20px 0',
              color: 'var(--brand-poppy)',
              fontWeight: '700'
            }}
          >
            <a href="mailto: prettylittlepoppymarketplace@gmail.com">
              prettylittlepoppymarketplace@gmail.com
            </a>
          </p>

          <p>
            We’ll review your message and get back to you within 2 business
            days—let’s make something awesome happen.
          </p>
          <br />
          <p>Please note &mdash; we are closed on Sundays and Mondays.</p>

        </div>
    </Layout>
  )
}
export default ContactPage
