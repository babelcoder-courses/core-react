import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import {
  onlyUpdateForKeys,
  withHandlers,
  setPropTypes,
  branch,
  renderComponent,
  compose
} from 'recompose'
import { withAuth } from '../lib'

const Nav = ({ children }) => (
  <nav className='navbar navbar-toggleable-md navbar-light bg-faded mb-3'>
    {children}
  </nav>
)

const UserMenu = ({ logout }) => (
  <Nav>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a
          href="#"
          className="nav-link"
          onClick={logout}>Logout</a>
      </li>
    </ul>
  </Nav>
)

const GuestMenu = () => (
  <Nav>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to='/sign-in' className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to='/sign-up' className="nav-link">Register</Link>
      </li>
    </ul>
  </Nav>
)

export default compose(
  withAuth,
  withRouter,
  setPropTypes({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }),
  withHandlers({
    logout: ({ history: { push }, removeToken }) => _ => {
      removeToken()
      push('/')
    }
  }),
  branch(
    ({ accessToken }) => accessToken,
    renderComponent(UserMenu),
    renderComponent(GuestMenu)
  ),
  onlyUpdateForKeys(['accessToken'])
)()
