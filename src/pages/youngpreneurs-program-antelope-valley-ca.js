import React, { useRef } from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

import * as styles from '../components/Contact/Contact.module.css'

const ContactPage = () => {
  return (
    <Layout disablePaddingBottom>
      <Hero
        title={'Minors to Majors Program'}
        maxWidth={'1024'}
        image={
          'https://images.ctfassets.net/xuyebjupxu9b/1zCMd7hRXi8wtOUORzYtvz/df7905f43479bcd9bed83609c5f547a6/m2m-banner.png'
        }
      />
      <div className={styles.root}>

          <h4>Hey, buds!</h4>
          <p>
            Your child's journey from minor to major starts here! We're still working on the bells and whistles. In the meantime, please send us a message the e-mail below.
            </p>

            <p style={{ textAlign: 'center', padding: '20px 0', color: 'var(--brand-poppy)', fontWeight: '700' }}>
              <a href="mailto: prettylittlepoppymarketplace@gmail.com?subject=inquirying about the minors to majors program">prettylittlepoppymarketplace@gmail.com</a>
              </p>

            <p>We’ll review your
            message and get back to you within 2 business days—let’s make
            something awesome happen.
          </p><br />
          <p>Please refer to our hours of operation below. Thank you!</p>

      </div>
    </Layout>
  )
}
export default ContactPage
