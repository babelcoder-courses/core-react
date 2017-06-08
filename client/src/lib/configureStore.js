import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import logger from 'redux-logger'
import { storage } from 'Middlewares'
import rootReducer from '../reducers'
import DevTools from 'Containers/DevTools'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

export default function(initialState) {
  const middlewares = [
    logger,
    storage
  ]

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument(),
      persistState(getDebugSessionKey())
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    )
  }

  return store
}
