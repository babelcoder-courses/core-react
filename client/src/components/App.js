import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Content, Header } from './'
import { Signin, Signup } from '../containers'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Switch>
        <Route path='/sign-in' component={Signin} />
        <Route path='/sign-up' component={Signup} />
        <Route component={Content} />
      </Switch>
    </div>
  </div>
)

export default App
