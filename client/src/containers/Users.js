import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserList } from 'Components'
import { UserStore } from 'Stores'

const Users = () => (
  <Switch>
    <Route path='/users' render={() => <UserList users={UserStore.getState()} />} />
  </Switch>
)

export default Users
