import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Button.scss'

const Button = ({ to, onClick, children }) => (
  to ? (
    <Link to={to} className={styles.button}>{children}</Link>
  ) : (
    <button onClick={onClick} className={styles.button}>{children}</button>
  )
)

Button.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
}

Button.defaultProps = {
  isLink: false
}

export default Button
