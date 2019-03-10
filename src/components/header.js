import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from './logo.png'

import styles from './header.module.scss';

const Header = ({ links, siteTitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link
          className={styles.logoContainer}
          to="/"
        >
          <div className={styles.logo}>
            <div className={styles.logoImg}>
              <img alt={`${siteTitle} logo`} src={logo} />
            </div>
            <h1 className={styles.logoText}>
              {siteTitle}
            </h1>
          </div>
        </Link>
      </div>
      <nav className={styles.navWrapper}>
        {
          links && links.map(link => (
            <Link
              activeClassName={styles.active}
              className={styles.navLink}
              key={link.label}
              to={link.url}
            >
              {link.label}
            </Link>
          ))
        }
      </nav>
    </div>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })),
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
