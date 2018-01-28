import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from 'Features/ui/components/Button'
import styles from './AuthForm.scss'

class AuthForm extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  onSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state

    this.props.onSubmit(email, password)
  }

  render() {
    const { title } = this.props
    const { email, password } = this.state

    return (
      <form>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.group}>
          <label>Email</label>
          <input type='text' name='email' onChange={this.onChange} value={email} />
        </div>
        <div className={styles.group}>
          <label>Password</label>
          <input type='password' name='password' onChange={this.onChange} value={password}  />
        </div>
        <div className={styles.button}>
          <Button onClick={this.onSubmit}>{title}</Button>
        </div>
      </form>
    )
  }
}

export default AuthForm

