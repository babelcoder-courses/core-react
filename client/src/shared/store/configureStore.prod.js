import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'

export default function(initialState) {
  const middlewares = [apiMiddleware, thunk]

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  return store
}
