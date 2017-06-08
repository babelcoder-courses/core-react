import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import { Form } from 'Components'
import { createArticle }  from 'Actions'

class CreateArticle extends PureComponent {
  render() {
    return (
      <Form onSubmit={this.props.createArticle} />
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
)(CreateArticle)
