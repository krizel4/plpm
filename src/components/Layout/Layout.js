import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import * as styles from './Layout.module.css'

// CSS not modular here to provide global styles
import './Globals.css'

const Layout = ({
  props,
  children,
  disablePaddingBottom = false,
  hideNav = false,
  hideFooter = false
}) => {
  return (
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>

      {!hideNav && <Header />}

      <main
        className={`${styles.main} ${
          disablePaddingBottom ? styles.disablePaddingBottom : ''
        }`}
      >
        {children}
      </main>

      {!hideFooter && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disablePaddingBottom: PropTypes.bool,
  hideNav: PropTypes.bool,
  hideFooter: PropTypes.bool
}

export default Layout
