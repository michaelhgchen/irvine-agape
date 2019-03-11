import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'

import Header from './header'
import styles from './layout.module.scss'
import './global.scss'

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                pages {
                  label
                  url
                }
                title
              }
            }
          }
        `}
        render={data => (
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className="container no-padding">
                <Header
                  links={data.site.siteMetadata.pages}
                  siteTitle={data.site.siteMetadata.title}
                />
              </div>
            </div>
            <main className={styles.content}>
              <div className={styles.fillContent}>
                {children}
              </div>
            </main>
          </div>
        )}
      />
    )
  }
}

export default Layout
