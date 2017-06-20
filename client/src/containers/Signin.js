import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from 'Actions'
import { AuthForm } from 'Components'

class Signin extends PureComponent {
  render() {
    if(this.props.isLoggedIn) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <AuthForm title='Login' onSubmit={this.props.login} />
      )
    }
  }
}

export default connect(
  ({ auth }) => ({ isLoggedIn: !!auth.token }),
  { login }
)(Signin)
