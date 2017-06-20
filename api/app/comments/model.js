import Model from '../model'

const Comments = {
  ...Model,
  key: 'comments',
  permittedAttrs: ['title', 'content', 'authorId', 'categoryId']
}

export default Comments
