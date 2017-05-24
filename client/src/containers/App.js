import React from 'react'
import { Header } from 'Components'
import { Articles, Users, Provider } from 'Containers'
import { createStore } from 'Lib'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

export default () => (
  <Provider store={store}>
    <div>
      <Header />
      <Articles />
      <Users />
    </div>
  </Provider>
)
