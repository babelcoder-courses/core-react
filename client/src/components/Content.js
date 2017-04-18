import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { pure } from 'recompose'
import { Home, Categories, Articles, NotFound } from './'
import { Sidebar } from '../containers'

const Content = () => (
  <div className='row'>
    <Sidebar />
    <div className="col-7">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/articles' component={Articles} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default pure(Content)
