import React from 'react'
import PropTypes from 'prop-types'
import styles from './Comment.scss'

const Comment = ({ user, message }) => (
  <div className={styles.comment}>
    <div className={styles.user}>{user}</div>
    <div className={styles.message}>{message}</div>
  </div>
)

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Comment
