import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Article, EditArticle } from '../containers'
console.log(EditArticle)
const Articles = () => (
  <Switch>
    <Route exact path='/articles/:id' component={Article} />
    <Route path='/articles/:id/edit' component={EditArticle} />
  </Switch>
)

export default Articles
