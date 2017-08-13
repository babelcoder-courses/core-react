import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadArticles } from '../actions'
import Article from './Article'
import Button from 'Features/ui/components/Button'
import Loading from 'Features/ui/components/Loading'
import { getArticles } from '../selectors'
import { getIsLoading } from 'Features/ui/selectors'
import { getIsLoggedIn } from 'Features/auth/selectors'
import styles from './Articles.scss'

const Articles = ({ isLoading, isLoggedIn, articles }) => (
  <div className={styles.container}>
    {isLoading && <Loading />}
    {isLoggedIn && (
      <div className={styles['new-article']}>
        <Button to='/articles/new'>New Article</Button>
      </div>
    )}
    <hr />
    {
      articles.map(
        article =>
          <Article key={article.id} {...article} />
        )
    }
  </div>
)

class ArticlesContainer extends PureComponent {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const { isLoading, isLoggedIn, articles } = this.props

    return (
      <Articles
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        articles={articles} />
    )
  }
}

export default connect(
  state => ({
    articles: getArticles(state),
    isLoading: getIsLoading(state),
    isLoggedIn: getIsLoggedIn(state)
  }),
  { loadArticles }
)(ArticlesContainer)

