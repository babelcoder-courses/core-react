import React from 'react'
import { Header } from 'Components'
import { Articles, Users } from 'Containers'
import { createStore } from 'Lib'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

export default () => (
  <div>
    <Header />
    <Articles store={store} />
    <Users store={store} />
  </div>
)
