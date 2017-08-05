import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as articlesReducer } from 'Features/articles'
import { reducer as authReducer } from 'Features/auth'
import { reducer as commentsReducer } from 'Features/comments'
import { reducer as usersReducer } from 'Features/users'
import { reducer as uiReducer } from 'Features/ui'

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  articles: articlesReducer,
  auth: authReducer,
  comments: commentsReducer,
  users: usersReducer
})
