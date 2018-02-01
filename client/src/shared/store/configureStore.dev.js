import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'
import DevTools from 'Features/ui/components/DevTools'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return matches && matches.length > 0 ? matches[1] : null
}

export default function(initialState) {
  const middlewares = [apiMiddleware, thunk, logger]

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), DevTools.instrument()),
    typeof window !== 'undefined' ? persistState(getDebugSessionKey()) : null
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
