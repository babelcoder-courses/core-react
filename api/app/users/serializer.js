import Serializer from '../serializer'

const UsersSerializer = {
  ...Serializer,

  get(user) {
    return this.serialize(user)
  },

  getAll(users) {
    return users.map(user => this.serialize(user))
  },

  create(user) {
    return this.serialize(user)
  },

  serialize(user) {
    const { id, email, isAdmin } = user

    return { id, email, isAdmin }
  }
}

export default UsersSerializer