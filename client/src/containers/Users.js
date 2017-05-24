import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'Lib'
import { UserList } from 'Components'

const Users = ({ users }) => (
  <Switch>
    <Route path='/users' render={() => <UserList users={users} />} />
  </Switch>
)

export default compose(
  connect(
    ({ users }, props) => ({
      users
    })
  )
)(Users)
