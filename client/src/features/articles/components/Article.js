import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Article.scss'

const Article = ({ id, title, excerpt }) => (
  <div className={styles.article}>
    <div className={styles.header}>
      <Link to={`/articles/${id}`} className={styles.title}>{title}</Link>
    </div>
    <div className={styles.excerpt}>{excerpt}</div>
  </div>
)

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
}

export default Article
