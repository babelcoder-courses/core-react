import articles from './articles'
import users from './users'

function combineReducers(reducers) {
  return (state = {}, action) => Object.keys(reducers).reduce(
    (result, key) => ({ ...result, [key]: reducers[key](state[key], action) })
  , {})
}

export default combineReducers({
  articles,
  users
})
