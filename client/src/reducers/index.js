import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import articles from './articles'
import auth from './auth'
import comments from './comments'
import users from './users'
import ui from './ui'

export default combineReducers({
  form: formReducer,
  ui,
  articles,
  auth,
  comments,
  users
})
