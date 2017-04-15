import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  setDisplayName,
  branch,
  renderComponent,
  compose
} from 'recompose'
import { withAuth } from './'

const RedirectToHome = () => <Redirect to='/' />
const withAuthCheck = WrappedComponent => props => (
  <WrappedComponent {...props} />
)

export default WrappedComponent => compose(
  setDisplayName('withAuthCheck'),
  withAuth,
  branch(
    ({ accessToken }) => accessToken,
    withAuthCheck,
    renderComponent(RedirectToHome)
  )
)(WrappedComponent)
