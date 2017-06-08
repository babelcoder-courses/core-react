import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Articles extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.articles.map(
              article =>
                <li key={article.id}>
                  <Link to={`/articles/${article.id}`}>{article.value}</Link>
                </li>
              )
          }
        </ul>
        <Link to='/articles/new'>New Article</Link>
      </div>
    )
  }
}

export default connect(
  ({ articles }) => ({
    articles
  })
)(Articles)

