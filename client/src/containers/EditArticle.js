import React from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import {
  setPropTypes,
  withHandlers,
  withState,
  withProps,
  lifecycle,
  onlyUpdateForKeys,
  compose
} from 'recompose'
import { withAuth, withAuthCheck } from '../lib'
import { ArticleForm } from '../components'

const EditArticleContainer = ({
  article,
  editArticle
}) => (
  <ArticleForm
    formType='Edit'
    {...article}
    onSubmit={editArticle} />
)

export default compose(
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: numericString().isRequired
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }),
  withAuth,
  withAuthCheck,
  withState('article', 'setArticle', { title: '', content: '' }),
  withProps(props => ({ accessToken: props.auth.getToken() })),
  withHandlers({
    editArticle: ({
      history: { push },
      match: { params: { id } },
      accessToken
    }) => article => {
      fetch(`/articles/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': accessToken
        },
        body: JSON.stringify({
          ...article
        })
      })
        .then(res => res.json())
        .then(({ article: { id } }) => push(`/articles/${id}`))
    },
    loadArticle: ({ match: { params: { id } }, article, setArticle }) => _ => {
      fetch(`/articles/${id}`)
        .then(res => res.json())
        .then(({ article }) => setArticle(article))
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadArticle()
    }
  }),
  onlyUpdateForKeys(['accessToken', 'article'])
)(EditArticleContainer)
