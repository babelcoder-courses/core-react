import React from 'react'
import PropTypes from 'prop-types'
import { setPropTypes, compose } from 'recompose'
import { Switch, Route } from 'react-router-dom'
import { UserList } from 'Components'

const Users = ({ users }) => (
  <Switch>
    <Route path='/users' render={() => <UserList users={users} />} />
  </Switch>
)

export default compose(
  setPropTypes({
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  })
)(Users)
