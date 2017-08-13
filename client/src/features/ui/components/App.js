import React from 'react'
import { Route, Switch } from 'react-router'
import Loadable from './Loadable'
import Header from './Header'
import styles from './App.scss'

const AsyncSignin = Loadable({
  loader: () => import(/* webpackChunkName: "Signin" */ 'Features/auth/components/Signin')
})

const AsyncSignup = Loadable({
  loader: () => import(/* webpackChunkName: "Signup" */ 'Features/auth/components/Signup')
})

const AsyncCreateArticle = Loadable({
  loader: () => import(/* webpackChunkName: "CreateArticle" */ 'Features/articles/components/CreateArticle')
})

const AsyncEditArticle = Loadable({
  loader: () => import(/* webpackChunkName: "EditArticle" */ 'Features/articles/components/EditArticle')
})

const AsyncShowArticle = Loadable({
  loader: () => import(/* webpackChunkName: "ShowArticle" */ 'Features/articles/components/ShowArticle')
})

const AsyncArticles = Loadable({
  loader: () => import(/* webpackChunkName: "Articles" */ 'Features/articles/components/Articles')
})

export default () => (
  <div>
    <Header />
    <div className={styles.content}>
      <Switch>
        <Route path='/login' component={AsyncSignin} />
        <Route path='/signup' component={AsyncSignup} />
        <Route path='/articles/new' component={AsyncCreateArticle} />
        <Route path='/articles/:id/edit' component={AsyncEditArticle} />
        <Route path='/articles/:id' component={AsyncShowArticle} />
        <Route path='/articles' component={AsyncArticles} />
      </Switch>
    </div>
  </div>
)
