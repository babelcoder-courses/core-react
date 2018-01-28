import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { editArticle, loadArticle } from '../actions'
import { getArticle } from '../selectors'
import ArticleForm from './ArticleForm'

class EditArticleContainer extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { editArticle, article } = this.props

    return (
      <ArticleForm
        initialValues={article}
        header='Edit Article'
        onSubmit={editArticle} />
    )
  }
}

export default compose(
  withRouter,
  connect(
    (state, props) => ({
      article: getArticle(state, props)
    }),
    (dispatch, { match: { params }, history }) => ({
      editArticle(article) {
        dispatch(editArticle(params.id, article))
        history.push('/articles')
      },
      loadArticle() {
        dispatch(loadArticle(params.id))
      }
    })
  )
)(EditArticleContainer)

