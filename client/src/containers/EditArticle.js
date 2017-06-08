import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { editArticle } from 'Actions'
import { Form } from 'Components'

class EditArticle extends PureComponent {
  render() {
    const { article, editArticle } = this.props

    return (
      <Form value={article.value} onSubmit={editArticle} />
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
      editArticle(value) {
        dispatch(editArticle(match.params.id, value))
        history.push('/articles')
      }
    })
  )
)(EditArticle)
