import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Auth } from '../lib'

function logout(push) {
  return () => {
    Auth.removeToken()
    push('/')
  }
}

const Header = ({ history: { push } }) => {
  const links = Auth.getToken() ? (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a
          href="#"
          className="nav-link"
          onClick={logout(push)}>Logout</a>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to='/sign-in' className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to='/sign-up' className="nav-link">Register</Link>
      </li>
    </ul>
  )
  return (
    <nav className='navbar navbar-toggleable-md navbar-light bg-faded mb-3'>
      {links}
    </nav>
  )
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(Header)
