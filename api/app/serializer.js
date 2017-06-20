const Serializer = {
  for(method, resource) {
    return this[method](resource)
  }
}

export default Serializer