import Policy from '../policy'

const CommentsPolicy = {
  ...Policy,

  create(user) {
    return !!user
  }
}

export default CommentsPolicy
