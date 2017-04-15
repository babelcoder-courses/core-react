import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { pure } from 'recompose'
import { Articles, NewArticle } from '../containers'

const Categories = () => (
  <Switch>
    <Route
      path='/categories/:categoryId/articles/new'
      component={NewArticle} />
    <Route
      path='/categories/:categoryId/articles'
      component={Articles} />
    <Route
      path='/categories/:categoryId'
      render={({ match: { params: { categoryId } } }) => (
        <Redirect
          to={`/categories/${categoryId}/articles`}/>
      )} />
  </Switch>
)

export default pure(Categories)
