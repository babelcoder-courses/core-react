import React from 'react'
import PropTypes from 'prop-types'
import { Comment, NewComment } from 'Components'

const Comments = ({ comments, commentIds, users, createComment }) => (
  <div>
    <NewComment onSubmit={createComment} />
    {
      commentIds.map(id => {
        const comment = comments[id]
        const user = users[comment.user]

        return <Comment key={id} message={comment.message} user={user.name} />
      })
    }
  </div>
)

Comments.propTypes = {
  commentIds: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ),
  comments: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ),
  users: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  createComment: PropTypes.func.isRequired
}

Comments.defaultProps = {
  commentIds: []
}

export default Comments
