export default reducer => {
  let listeners = []
  let state

  const store = {
    getState() {
      return state
    },

    dispatch(action) {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
    },

    subscribe(listener) {
      listeners.push(listener)

      return () => listeners = listeners.filter(l => l !== listener)
    }
  }

  store.dispatch({})

  return store
}
