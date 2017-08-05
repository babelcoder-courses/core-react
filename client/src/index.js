import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RootContainer from './features/ui/components/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(RootContainer)

if (module.hot) {
  module.hot.accept('./features/ui/components/Root', () => render(RootContainer))
}
