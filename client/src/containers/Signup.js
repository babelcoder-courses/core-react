import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from 'Actions'
import { AuthForm } from 'Components'
import { getIsLoggedIn } from 'Selectors'

class Signup extends PureComponent {
  render() {
    if(this.props.isLoggedIn) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <AuthForm title='Register' onSubmit={this.props.register} />
      )
    }
  }
}

export default connect(
  state => ({ isLoggedIn: getIsLoggedIn(state) }),
  { register }
)(Signup)
