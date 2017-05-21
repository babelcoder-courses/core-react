import React from 'react'
import { withState, compose } from 'recompose'
import { Switch, Route } from 'react-router-dom'
import { UserList } from 'Components'

const Users = ({ users }) => (
  <Switch>
    <Route path='/users' render={() => <UserList users={users} />} />
  </Switch>
)

export default compose(
  withState('users', 'setUsers', [
    { id: 1, name: 'User#1' },
    { id: 2, name: 'User#2' }
  ])
)(Users)
