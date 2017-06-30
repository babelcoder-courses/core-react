import Comments from './model'
import Users from '../users/model'
import CommentsPolicy from './policy'

const CommentsController = {
  create(req, res) {
    const user = req.user

    if(CommentsPolicy.for('create', user)) {
      const comment = Comments.create({ ...req.body, userId: user.id })

      res.status(201).json({ comment })
    } else {
      res
        .status(401)
        .json({
          comment: {
            errors: ['You are not allowed to create the comment.']
          }
        })
    }
  }
}

export default CommentsController


