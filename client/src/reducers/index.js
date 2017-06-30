import { combineReducers } from 'redux'
import articles from './articles'
import auth from './auth'
import comments from './comments'
import users from './users'

export default combineReducers({
  articles,
  auth,
  comments,
  users
})
