import React from 'react'
import PropTypes from 'prop-types'
import { Article } from 'Components'
import styles from './ArticleList.scss'

const ArticleList = ({ articles }) => (
  <div className={styles.articles}>
    {
      articles.map(article => <Article key={article.id} {...article} />)
    }
  </div>
)

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired
}

export default ArticleList
