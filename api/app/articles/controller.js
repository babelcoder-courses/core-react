import Articles from './model'
import ArticlesPolicy from './policy'

const ArticlesController = {
  getAll(req, res) {
    const { categoryId, page, perPage } = req.query
    const articles = Articles.paginate({ categoryId }, page, perPage)

    res.json(articles)
  },

  get(req, res) {
    res.json({ article: Articles.find(req.params.id) })
  },

  create(req, res) {
    if(ArticlesPolicy.for('create', req.user)) {
      const article = Articles.create(req.body)

      res.status(201).json({ article })
    } else {
      res
        .status(401)
        .json({
          article: {
            errors: ['You are not allowed to create the article.']
          }
        })
    }
  },

  update(req, res) {
    const id = req.params.id

    if(ArticlesPolicy.for('update', req.user, Articles.find(id))) {
      const article = Articles.update(id, req.body)

      res.status(200).json({ article })
    } else {
      res
        .status(401)
        .json({
          article: {
            errors: ['You are not allowed to update the article.']
          }
        })
    }
    
  },

  destroy(req, res) {
    const id = req.params.id

    if(ArticlesPolicy.for('destroy', req.user, Articles.find(id))) {
      Articles.destroy(id)
      res.status(204)
    } else {
      res
        .status(401)
        .json({
          article: {
            errors: ['You are not allowed to delete the article.']
          }
        })
    }
  }
}

export default ArticlesController