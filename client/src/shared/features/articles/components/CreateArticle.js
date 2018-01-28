import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import ArticleForm from './ArticleForm'
import { createArticle }  from '../actions'

class CreateArticleContainer extends PureComponent {
  render() {
    return (
      <ArticleForm
        header='New Article'
        onSubmit={this.props.createArticle} />
    )
  }
}

export default compose(
  withRouter,
  connect(
    null,
    (dispatch, props) => ({
      createArticle(value) {
        dispatch(createArticle(value))
        props.history.push('/articles')
      }
    })
  )
)(CreateArticleContainer)
