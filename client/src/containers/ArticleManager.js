import React from 'react'
import PropTypes from 'prop-types'
import {
  onlyUpdateForPropTypes,
  setPropTypes,
  compose
} from 'recompose'
import { withAuthCheck } from '../lib'
import { ArticleForm } from '../components'

const ArticleManagerContainer = ({
  article,
  onSubmit,
  formType
}) => (
  <ArticleForm
    {...article}
    formType={formType}
    onSubmit={onSubmit} />
)

export default compose(
  withAuthCheck,
  onlyUpdateForPropTypes,
  setPropTypes({
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    formType: PropTypes.string.isRequired
  })
)(ArticleManagerContainer)
