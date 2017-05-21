import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardBody.scss'

const CardBody = ({ children }) => (
  <div className={styles['card-body']}>
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardBody
