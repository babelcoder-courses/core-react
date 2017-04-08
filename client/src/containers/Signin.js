import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Auth } from '../lib'
import { AuthForm } from '../components'

class SigninContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }

  handleFormSubmit = credential => {
    fetch('/sessions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credential)
    })
      .then(({ headers }) => Auth.setToken(headers))
      .then(() => this.props.history.goBack())
  }

  render() {
    return (
      <AuthForm
        formName='Signin'
        onSubmit={this.handleFormSubmit} />
    )
  }
}

export default SigninContainer
