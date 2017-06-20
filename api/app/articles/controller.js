import Articles from './model'
import Comments from '../comments/model'
import Users from '../users/model'
import ArticlesPolicy from './policy'

const ArticlesController = {
  getAll(_, res) {
    res.json({ articles: Articles.findAll() })
  },

  get(req, res) {
    const id = req.params.id
    const comments = Comments.findAll().filter(
      comment => comment.articleId === +req.params.id
    ).map(comment => ({ ...comment, user: Users.find(comment.userId) }))

    res.json({
      article: {
        ...Articles.find(id),
        comments
      }
    })
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


