import React from 'react'
import { setDisplayName, compose } from 'recompose'
import { Auth } from './'

const withAuth = WrappedComponent => props => (
  <WrappedComponent {...props} {...Auth} accessToken={Auth.getToken()} />
)

export default WrappedComponent => compose(
  setDisplayName('WithAuth'),
  withAuth
)(WrappedComponent)
