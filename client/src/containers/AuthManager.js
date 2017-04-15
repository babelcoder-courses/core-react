import React from 'react'
import PropTypes from 'prop-types'
import {
  setPropTypes,
  pure,
  compose
} from 'recompose'
import { AuthForm } from '../components'

const AuthManager = ({
  formName,
  onSubmit
}) => (
  <AuthForm
    formName={formName}
    onSubmit={onSubmit} />
)

export default compose(
  setPropTypes({
    formName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  pure
)(AuthManager)
