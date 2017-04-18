const Finder = {
  where(conditions) {
    const collection = this.collection()

    return Object
      .keys(conditions)
      .reduce(
        (results, key) => results.filter(item => item[key] == conditions[key])
      , collection)
  },

  findRecord(id) {
    return this.collection().find(record => record.id === +id)
  },

  findIndex(id) {
    return this.collection().findIndex(record => record.id === +id)
  }
}

export default Finder
