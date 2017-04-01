import Model from '../model'

const Articles = {
  ...Model,
  key: 'articles',
  permittedAttrs: ['title', 'content', 'authorId', 'categoryId']
}

export default Articles
