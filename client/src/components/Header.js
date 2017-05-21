import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

export default () => (
  <nav className={styles.header}>
    <div className={styles.brand}>
      <Link to='/' className={styles['brand-item']}>
        <img src='/assets/images/logo.png' alt='Logo' />
      </Link>
    </div>
    <div className={styles.menu}>
      <Link to='/articles' className={styles['menu-item']}>Articles</Link>
      <Link to='/users' className={styles['menu-item']}>Users</Link>
    </div>
    <div className={styles.auth}>
    </div>
  </nav>
)
