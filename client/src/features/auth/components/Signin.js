import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../actions'
import AuthForm from './AuthForm'
import { getIsLoggedIn } from '../selectors'

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
  state => ({ isLoggedIn: getIsLoggedIn(state) }),
  { login }
)(Signin)
