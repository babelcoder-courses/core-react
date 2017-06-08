import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { deleteArticle } from 'Actions'

class ShowArticle extends PureComponent {
  render() {
    const { article, match: { params }, deleteArticle } = this.props

    return (
      <div>
        <div>Value: {article.value}</div>
        <Link to={`/articles/${params.id}/edit`}>Edit</Link>
        <button onClick={deleteArticle}>Delete</button>
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(
    ({ articles }, { match }) => ({
      article: articles.find(article => article.id === +match.params.id)
    }),
    (dispatch, { match, history }) => ({
      deleteArticle() {
        dispatch(deleteArticle(match.params.id))
        history.push('/articles')
      }
    })
  )
)(ShowArticle)
