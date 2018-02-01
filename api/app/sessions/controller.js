import { Users } from '../users'
import SessionsSerializer from './serializer'

const SessionsController = {
  create(req, res) {
    const { email, password } = req.body
    const user = Users.findByEmail(email)

    Users.verify(user, password).then(isValid => {
      if (isValid) {
        res
          .cookie('accessToken', Users.genToken(user), { httpOnly: true })
          .status(201)
          .json({ user: SessionsSerializer.for('create', user) })
      } else {
        res.status(401).json({
          user: {
            errors: ['Invalid credentials.']
          }
        })
      }
    })
  },

  destroy(req, res) {
    res
      .status(204)
      .cookie('accessToken', '', { httpOnly: true })
      .send()
  }
}

export default SessionsController
