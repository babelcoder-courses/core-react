import Model from '../model'

const Articles = {
  ...Model,
  key: 'articles',
  permittedAttrs: ['title', 'content', 'excerpt', 'authorId']
}

export default Articles
