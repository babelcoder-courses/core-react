import React from 'react'
import PropTypes from 'prop-types'
import {
  setPropTypes,
  withHandlers,
  pure,
  compose
} from 'recompose'
import { withAuth } from '../lib'
import { AuthForm } from '../components'

const SigninContainer = ({
  onSubmit
}) => (
  <AuthForm
    formName='Signin'
    onSubmit={onSubmit} />
)

export default compose(
  setPropTypes({
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }),
  withAuth,
  withHandlers({
    onSubmit: ({
      history: { goBack },
      auth: { setToken }
    }) => credential => {
      fetch('/sessions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
      })
        .then(({ headers }) => setToken(headers))
        .then(() => goBack())
    }
  }),
  pure
)(SigninContainer)
