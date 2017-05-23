import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setPropTypes, withState, lifecycle, compose } from 'recompose'
import { UserList } from 'Components'

const Users = ({ store }) => (
  <Switch>
    <Route path='/users' render={() => <UserList users={store.getState().users} />} />
  </Switch>
)

export default compose(
  withState('subscription', 'setSubscription', null),
  lifecycle({
    componentDidMount() {
      const subscription = this.props.store.subscribe(
        () => this.forceUpdate()
      )

      this.props.setSubscription(() => subscription)
    },

    componentWillUnmount() {
      this.props.subscription()
    }
  }),
  setPropTypes({
    store: PropTypes.object.isRequired
  })
)(Users)
