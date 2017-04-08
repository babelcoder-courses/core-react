import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AuthForm extends Component {
  static propTypes = {
    formName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state)
  }

  onFieldChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { formName } = this.props

    return (
      <form>
        <h2 className='text-center'>{formName} Form</h2>
        <hr />
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='Enter email'
            onChange={this.onFieldChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Enter password'
            onChange={this.onFieldChange} />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={this.onSubmit}>{formName}</button>
      </form>
    )
  }
}

export default AuthForm
