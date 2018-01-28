import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { setToken } from '../middlewares'
import rootReducer from '../reducers'

export default function(initialState) {
  const middlewares = [
    setToken,
    apiMiddleware,
    thunk
  ]

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  return store
}
