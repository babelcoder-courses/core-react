import Categories from './model'

const CategoriesController = {
  getAll(req, res) {
    res.json({ categories: Categories.findAll() })
  }
}

export default CategoriesController