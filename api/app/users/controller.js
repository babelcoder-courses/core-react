import Users from './model'
import UsersSerializer from './serializer'

const UsersController = {
  getAll(req, res) {
    res.json({
      users: UsersSerializer.for('getAll', Users.findAll())
    })
  },

  get(req, res) {
    res.json({
      user: UsersSerializer.for('get', Users.find(req.params.id))
    })
  },

  create(req, res) {
    const { email, password } = req.body
    
    Users.create(email, password).then(
      user => {
        res
          .header('Authorization', `Bearer ${Users.genToken(user)}`)
          .status(201)
          .json({ user: UsersSerializer.for('create', user) })
      }
    )
  }
}

export default UsersController