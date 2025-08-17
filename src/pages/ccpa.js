import React from 'react'
import Layout from '../components/Layout/Layout'
import * as styles from './ccpa.module.css'

export default function IndexPage () {
  return (
    <Layout>
        <div className={styles.policyContainer}>
        <h3>Privacy Policy (California)</h3>
        <p>
            <span className='badge'>Last updated August 17, 2025</span>
        </p>

        <p>
            This Privacy Policy describes how{' '}
            <strong>Pretty Little Poppy Marketplace, LLC</strong> (“
            <strong>PLPM</strong>,” “we,” “us,” or “our”) collects, uses, discloses,
            and retains personal information of California residents in accordance
            with the California Consumer Privacy Act, as amended by the California
            Privacy Rights Act (together, the “<strong>CCPA</strong>”). This notice
            applies to our websites, events, online stores, and related services
            (the “<strong>Services</strong>”).
        </p>

        <div className='notice' id='notice-at-collection'>
            <h3>Notice at Collection (CCPA)</h3>
            <p>
            We collect the categories of personal information listed below for the
            business and commercial purposes stated, and we retain information
            only for as long as needed for those purposes or as required by law.
            We may disclose information to service providers and contractors. We
            do not sell personal information for money. We may <em>share</em>{' '}
            certain identifiers and internet activity with advertising partners
            for cross-context behavioral advertising unless you opt out using the
            choices below.
            </p>

            <table aria-label='Categories of personal information'>
            <thead>
                <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Purpose of Use</th>
                <th>Disclosed to</th>
                <th>Sold or Shared?</th>
                <th>Retention</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <strong>Identifiers</strong>
                </td>
                <td>
                    Name, email, phone, postal address, account ID, IP address
                </td>
                <td>
                    Account creation, orders &amp; vendor registration, customer
                    support, security &amp; fraud prevention, communications
                </td>
                <td>
                    Hosting, analytics, email &amp; SMS providers, payment
                    processors
                </td>
                <td>
                    Not sold. <em>May be shared</em> for advertising unless you opt
                    out
                </td>
                <td>For the life of your account and as required by law</td>
                </tr>
                <tr>
                <td>
                    <strong>Customer Records</strong>
                </td>
                <td>
                    Billing/shipping address, order history;{' '}
                    <em>
                    payment card data is processed by our payment processor and
                    not stored by us
                    </em>
                </td>
                <td>Fulfillment, accounting, support, legal compliance</td>
                <td>Payment processors, shipping providers, bookkeeping tools</td>
                <td>Not sold or shared</td>
                <td>Up to 7 years for tax &amp; accounting</td>
                </tr>
                <tr>
                <td>
                    <strong>Commercial Information</strong>
                </td>
                <td>
                    Products or services purchased, event bookings, preferences
                </td>
                <td>
                    Provide &amp; improve Services, personalization, analytics
                </td>
                <td>Analytics and operations service providers</td>
                <td>
                    Not sold. <em>May be shared</em> for advertising unless you opt
                    out
                </td>
                <td>As long as needed for the purpose collected</td>
                </tr>
                <tr>
                <td>
                    <strong>Internet / Network Activity</strong>
                </td>
                <td>
                    Device/browser data, pages viewed, referral URLs, cookies and
                    similar technologies
                </td>
                <td>Security, analytics, debugging, and to show ads</td>
                <td>Analytics and advertising partners</td>
                <td>
                    Not sold. <em>May be shared</em> for advertising unless you opt
                    out
                </td>
                <td>Usually 13–24 months (cookie-dependent)</td>
                </tr>
                <tr>
                <td>
                    <strong>Geolocation (approximate)</strong>
                </td>
                <td>General location inferred from IP address</td>
                <td>Fraud prevention, localization</td>
                <td>Security and analytics providers</td>
                <td>Not sold or shared</td>
                <td>As short as operationally useful</td>
                </tr>
                <tr>
                <td>
                    <strong>Inferences</strong>
                </td>
                <td>Predicted preferences or interests</td>
                <td>Personalization, marketing</td>
                <td>Analytics and marketing tools</td>
                <td>
                    <em>May be shared</em> for advertising unless you opt out
                </td>
                <td>As long as useful for personalization</td>
                </tr>
                <tr>
                <td>
                    <strong>Sensitive Personal Information</strong>
                </td>
                <td>
                    Account login &amp; password. We do <em>not</em> collect
                    government IDs or precise geolocation.
                </td>
                <td>To provide your account and secure the Services</td>
                <td>Hosting &amp; security providers</td>
                <td>Not sold or shared; not used to infer characteristics</td>
                <td>For the life of your account</td>
                </tr>
            </tbody>
            </table>

            <div className='cta-row'>
            <a className='btn primary' href='#request-rights'>
                Submit a privacy request
            </a>
            <a className='btn' href='#do-not-sell-share'>
                Do Not Sell or Share My Personal Information
            </a>
            <a className='btn' href='#limit-sensitive'>
                Limit the Use of My Sensitive Personal Information
            </a>
            </div>
        </div>

        <h3 id='scope'>1) Scope</h3>
        <p>
            This policy covers California residents’ interactions with PLPM in
            person at our events and online. It does not apply to job applicants,
            employees, or business-to-business contacts collected in an employment
            or contractor context.
        </p>

        <h3 id='sources'>2) Sources of Personal Information</h3>
        <ul className='list-tight'>
            <li>
            <strong>Directly from you</strong> when you create an account, make a
            purchase, apply to vend, or contact us.
            </li>
            <li>
            <strong>Automatically</strong> via cookies, pixels, and similar
            technologies.
            </li>
            <li>
            <strong>From service providers</strong> (e.g., payment, shipping,
            anti-fraud, and analytics providers).
            </li>
        </ul>

        <h3 id='uses'>3) How We Use Personal Information</h3>
        <ul className='list-tight'>
            <li>Provide, operate, and secure the Services;</li>
            <li>Process orders, payments, and vendor registrations;</li>
            <li>
            Communicate with you about your account, orders, events, and marketing
            (you can opt out of marketing at any time);
            </li>
            <li>Debug, analyze, and improve the Services;</li>
            <li>Detect, investigate, and prevent security incidents and fraud;</li>
            <li>
            Comply with legal obligations, enforce terms, and protect our rights.
            </li>
        </ul>

        <h3 id='disclosures'>4) Disclosing Personal Information</h3>
        <p>
            We disclose personal information to service providers and contractors
            who process it on our behalf for the purposes listed above, under
            contracts that restrict their use of the data (e.g., hosting, payment
            processing, analytics, communications, shipping, bookkeeping, security).
            We may also disclose information to authorities if required by law or to
            protect rights and safety.
        </p>

        <h3 id='sale-share'>5) “Sale” and “Sharing”</h3>
        <p>
            We do not sell personal information for money. We may <em>share</em>{' '}
            identifiers and internet activity with advertising partners to show you
            ads based on your activities across different websites or apps
            (cross-context behavioral advertising). You may opt out at any time
            using the link below.
        </p>
        <p id='do-not-sell-share'>
            <strong>Opt-out:</strong>{' '}
            <a href='#request-rights'>Submit a “Do Not Sell or Share” request</a> or
            use a browser that supports the <em>Global Privacy Control (GPC)</em>;
            we treat GPC signals as a valid request to opt out for that browser.
        </p>

        {/* Continue any additional sections from your original document here, using the same pattern. */}
        <div className='hr'></div>
        <footer>
            <p>
            <a href='#notice-at-collection'>Notice at Collection</a> ·{' '}
            <a href='#request-rights'>Privacy Request</a> ·{' '}
            <a href='#do-not-sell-share'>Do Not Sell or Share</a> ·{' '}
            <a href='#limit-sensitive'>Limit SPI</a>
            </p>
            <p className='muted'>
            © 2025 Pretty Little Poppy Marketplace, LLC. All rights reserved.
            </p>
        </footer>
        </div>
    </Layout>
  )
}
