import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardHeader.scss'

const CardHeader = ({ children }) => (
  <div className={styles['card-header']}>
    {children}
  </div>
)

CardHeader.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardHeader
