import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './Comment'
import NewComment from './NewComment'
import { getCommentsByIds } from '../selectors'

const Comments = ({ comments, createComment }) => (
  <div>
    <NewComment onSubmit={createComment} />
    {
      Object.keys(comments).map(id => {
        const { message, user } = comments[id]

        return <Comment key={id} message={message} user={user.name} />
      })
    }
  </div>
)

Comments.propTypes = {
  comments: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ),
}

const CommentsContainer = ({ comments, createComment }) => (
  <Comments comments={comments} createComment={createComment} />
)

Comments.propTypes = {
  commentIds: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ),
  createComment: PropTypes.func.isRequired
}

Comments.defaultProps = {
  commentIds: []
}

export default connect(
  (state, props) => ({
    comments: getCommentsByIds(state, props)
  })
)(CommentsContainer)
