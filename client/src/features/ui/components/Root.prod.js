import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '../../../store'
import App from './App'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

