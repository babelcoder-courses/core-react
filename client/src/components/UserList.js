import React from 'react'
import PropTypes from 'prop-types'
import { User } from 'Components'
import styles from './UserList.scss'

const UserList = ({ users }) => (
  <div className={styles.users}>
    {
      users.map(user => <User key={user.id} {...user} />)
    }
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

export default UserList
