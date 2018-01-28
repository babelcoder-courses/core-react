import React from 'react'
import { renderRoutes } from 'react-router-config'

import Header from './Header'
import styles from './App.scss'

export default ({ route }) => (
  <div>
    <Header />
    <div className={styles.content}>{renderRoutes(route.routes)}</div>
  </div>
)
