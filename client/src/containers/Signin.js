import PropTypes from 'prop-types'
import { AuthManager } from './'
import {
  setPropTypes,
  withState,
  withHandlers,
  compose
} from 'recompose'
import { withAuth } from '../lib'

const SigninContainer = compose(
  setPropTypes({
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }),
  withState('formName', 'setFormName', 'Signin'),
  withHandlers({
    onSubmit: ({ history: { goBack }, setToken }) => credential => {
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
  })
)(AuthManager)

export default withAuth(SigninContainer)
