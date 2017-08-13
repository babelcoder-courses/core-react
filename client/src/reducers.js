import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import articlesReducer from 'Features/articles/reducer'
import authReducer from 'Features/auth/reducer'
import commentsReducer from 'Features/comments/reducer'
import usersReducer from 'Features/users/reducer'
import uiReducer from 'Features/ui/reducer'

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  articles: articlesReducer,
  auth: authReducer,
  comments: commentsReducer,
  users: usersReducer
})
