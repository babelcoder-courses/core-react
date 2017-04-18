import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  branch,
  setDisplayName,
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
    ({ auth: { getToken } }) => getToken(),
    withAuthCheck,
    renderComponent(RedirectToHome)
  )
)(WrappedComponent)
