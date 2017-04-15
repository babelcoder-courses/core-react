import {
  onlyUpdateForKeys,
  setPropTypes,
  withState,
  withHandlers,
  withProps,
  compose
} from 'recompose'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { ArticleManager } from './'
import { withAuth, withAuthCheck } from '../lib'

const NewArticleContainer = compose(
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryId: numericString().isRequired
      }).isRequired,
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      })
    }).isRequired
  }),
  withAuth,
  withAuthCheck,
  withState('article', 'setArticle', { title: '', content: '' }),
  withProps({
    formType: 'Create'
  }),
  withHandlers({
    onSubmit: ({
      history: { push },
      match: { params: { categoryId } },
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
        .then(({ article: { id } }) => push(`/articles/${id}`))
    }
  }),
  onlyUpdateForKeys(['article', 'accessToken'])
)(ArticleManager)

export default NewArticleContainer
