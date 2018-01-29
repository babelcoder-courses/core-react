import Serializer from '../serializer'

const SessionsSerializer = {
  ...Serializer,

  create(user) {
    const { id, email, isAdmin } = user

    return { id, email, isAdmin }
  }
}

export default SessionsSerializer