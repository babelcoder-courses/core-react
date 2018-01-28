import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import { configureStore } from '../../../store'
import routes from '../../../routes'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

export default () => (
  <Provider store={store}>
    <div>
      <Router>{renderRoutes(routes)}</Router>
    </div>
  </Provider>
)
