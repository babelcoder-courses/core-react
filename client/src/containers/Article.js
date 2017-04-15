import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import {
  onlyUpdateForKeys,
  setPropTypes,
  withState,
  withHandlers,
  lifecycle,
  compose
} from 'recompose'
import { withAuth } from '../lib'

const ArticleContainer = ({
  match: { params: { id } },
  article: { title, content },
  backToPreviousUrl,
  accessToken
}) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
    <div className="btn-group">
      <button
        className="btn btn-sm btn-primary"
        onClick={backToPreviousUrl}>Back</button>
        {
          accessToken && (
            <Link
              to={`/articles/${id}/edit`}
              className='btn btn-sm btn-secondary'>Edit</Link>
          )
        }
    </div>
  </div>
)

export default compose(
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: numericString().isRequired
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }),
  withAuth,
  withState('article', 'setArticle', { title: '', content: '' }),
  withHandlers({
    loadArticle: ({ match: { params: { id } }, setArticle }) => _ => (
      fetch(`/articles/${id}`)
        .then(res => res.json())
        .then(({ article }) => setArticle({ ...article }))
    ),
    backToPreviousUrl: ({ history: { goBack } }) => _ => (
      goBack()
    )
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadArticle()
    }
  }),
  onlyUpdateForKeys(['article'])
)(ArticleContainer)
