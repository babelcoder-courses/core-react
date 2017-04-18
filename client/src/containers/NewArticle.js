import React from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import {
  setPropTypes,
  withHandlers,
  withProps,
  onlyUpdateForKeys,
  compose
} from 'recompose'
import { withAuth, withAuthCheck } from '../lib'
import { ArticleForm } from '../components'

const NewArticleContainer = ({
  createArticle
}) => (
  <ArticleForm
    formType='Create'
    onSubmit={createArticle} />
)

export default compose(
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryId: numericString().isRequired
      }).isRequired
    }).isRequired
  }),
  withAuth,
  withProps(props => ({ accessToken: props.auth.getToken() })),
  withAuthCheck,
  withHandlers({
    createArticle: ({
      match: { params: { categoryId } },
      history: { push },
      accessToken
    }) => article => {
      fetch('/articles', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': accessToken
        },
        body: JSON.stringify({
          ...article, categoryId
        })
      })
        .then(res => res.json())
        .then(({ article: { id } }) =>
          push(`/articles/${id}`)
        )
    }
  }),
  onlyUpdateForKeys(['accessToken', 'article'])
)(NewArticleContainer)
