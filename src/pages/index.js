import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout fullWidthContent>
    <SEO title="Home" keywords={['irvine agape', 'christian church']} />
    <div className={styles.landingPageBg}>
      <div className={styles.hero}>
        这是一个仁爱，喜乐，和平的教会
      </div>
    </div>
    {/* <Image /> */}
  </Layout>
)

export default IndexPage
