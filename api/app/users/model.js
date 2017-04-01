import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config'
import Model from '../model'

const Users = {
  ...Model,
  key: 'users',
  permittedAttrs: ['email'],

  create(email, password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 12, (err, hash) => {
        if(err) return reject(err)

        const collection = this.collection()
        const user = {
          id: collection.length + 1,
          email,
          password: hash,
          isAdmin: false
        }

        this.setCollection([...collection, user])
        return resolve(user)
      })
    })
  },

  genToken(user) {
    return jwt.sign({ sub: user.id}, config.secretKey, { expiresIn: '1h'})
  },

  findByEmail(email) {
    return this.collection().find(user => user.email === email)
  },

  verify(user, password) {
    return new Promise((resolve, reject) => {
      const hash = user.password

      bcrypt.compare(password, hash, (err, isValid) => {
        if(err) return reject(err)
        return resolve(isValid)
      })
    })
  }
}

export default Users