import React from 'react'
import PropTypes from 'prop-types'
import { Comment } from 'Components'

const Comments = ({ comments }) => (
  <div>
    {
      comments.map(({ id, user, message }) =>
        <Comment key={id} message={message} user={user.name} />
      )
    }
  </div>
)

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      message: PropTypes.string
    })
  )
}

Comments.defaultProps = {
  comments: []
}

export default Comments
