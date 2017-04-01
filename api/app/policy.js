const Policy = {
  for(method, user, resource) {
    return this[method](user, resource)
  }
}

export default Policy