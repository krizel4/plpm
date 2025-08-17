import * as React from 'react'
import { Link } from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'
import { CalendarApp } from '../components/Calendar/Calendar'

import * as styles from './index.module.css'

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      <div className={styles.calendarContainer}>
        <CalendarApp />
      </div>
    </Layout>
  )
}

export default IndexPage
