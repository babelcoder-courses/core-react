import Users from './model'
import UsersSerializer from './serializer'

const UsersController = {
  getAll(req, res) {
    res.json({
      users: UsersSerializer.for('getAll', Users.findAll())
    })
  },

  getProfile(req, res) {
    if (!req.user) return res.status(404).send()

    res.json({ user: UsersSerializer.for('get', Users.find(req.user.id)) })
  },

  get(req, res) {
    res.json({
      user: UsersSerializer.for('get', Users.find(req.params.id))
    })
  },

  create(req, res) {
    const { email, password } = req.body

    Users.create(email, password).then(user => {
      res
        .cookie('accessToken', Users.genToken(user), { httpOnly: true })
        .status(201)
        .json({ user: UsersSerializer.for('create', user) })
    })
  }
}

export default UsersController
