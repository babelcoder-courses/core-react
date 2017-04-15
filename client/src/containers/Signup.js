import PropTypes from 'prop-types'
import { AuthManager } from './'
import {
  withState,
  setPropTypes,
  withHandlers,
  compose
} from 'recompose'
import { withAuth } from '../lib'

const SignupContainer = compose(
  setPropTypes({
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }),
  withState('formName', 'setFormName', 'Signup'),
  withAuth,
  withHandlers({
    onSubmit: ({ history: { goBack }, setToken }) => credential => {
      fetch('/users', {
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
  })
)(AuthManager)

export default SignupContainer
