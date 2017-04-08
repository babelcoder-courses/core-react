import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Auth } from '../lib'
import { AuthForm } from '../components'

class SignupContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }

  handleFormSubmit = credential => {
    fetch('/users', {
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
        formName='Signup'
        onSubmit={this.handleFormSubmit} />
    )
  }
}

export default SignupContainer
