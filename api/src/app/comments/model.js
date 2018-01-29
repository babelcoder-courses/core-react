import Model from '../model'

const Comments = {
  ...Model,
  key: 'comments',
  permittedAttrs: ['message', 'articleId', 'userId']
}

export default Comments
