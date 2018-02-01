import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'

import { logout } from 'Features/auth/actions'
import { getIsLoggedIn } from 'Features/auth/selectors'
import styles from './Header.scss'

const Header = ({ isLoggedIn, logout }) => (
  <header className={styles.header}>
    <Link to="/articles" className={styles['nav-link']}>
      Articles
    </Link>
    {isLoggedIn ? (
      <div className={styles.auth}>
        <a href="#" className={styles['nav-link']} onClick={logout}>
          Logout
        </a>
      </div>
    ) : (
      <div className={styles.auth}>
        <Link to="/login" className={styles['auth-link']}>
          Signin
        </Link>
        <Link to="/signup" className={styles['auth-link']}>
          Signup
        </Link>
      </div>
    )}
  </header>
)

export default compose(
  connect(
    state => ({
      isLoggedIn: getIsLoggedIn(state)
    }),
    { logout }
  )
)(Header)
