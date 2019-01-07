import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout fullWidthContent>
    <SEO title="Home" keywords={['irvine agape', 'christian church']} />
    <div className={styles.landingPageBg}>
      <div className={styles.hero}>
        Hello
      </div>
    </div>
    {/* <Image /> */}
  </Layout>
)

export default IndexPage
