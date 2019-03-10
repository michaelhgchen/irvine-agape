import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Header from './header'
import styles from './layout.module.scss'
import './global.scss'

class Layout extends Component {
  render() {
    const { children, fullWidthContent } = this.props;

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
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.maxWidthWrapper}>
                <Header
                  links={data.site.siteMetadata.pages}
                  siteTitle={data.site.siteMetadata.title}
                />
              </div>
            </div>
            <main className={styles.content}>
              <div className={styles.fillContent}>
                {
                  fullWidthContent ? (
                    children
                  ) : (
                    <div className={styles.maxWidthWrapper}>
                      {children}
                    </div>
                  )
                }
              </div>
            </main>
          </div>
        )}
      />
    )
  }
}

Layout.defaultProps = {
  fullWidthContent: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidthContent: PropTypes.bool,
}

export default Layout
