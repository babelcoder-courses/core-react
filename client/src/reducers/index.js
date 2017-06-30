import { combineReducers } from 'redux'
import articles from './articles'
import auth from './auth'
import comments from './comments'
import users from './users'
import ui from './ui'

export default combineReducers({
  ui,
  articles,
  auth,
  comments,
  users
})
