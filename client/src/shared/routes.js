import React from 'react'
import Loadable from 'react-loadable'

import App from 'Features/ui/components/App'
import { loadArticles, loadArticle } from 'Features/articles/actions'

const Loading = () => <div>Loading...</div>

const AsyncSignin = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Signin" */ 'Features/auth/components/Signin'),
  loading: Loading
})

const AsyncSignup = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Signup" */ 'Features/auth/components/Signup'),
  loading: Loading
})

const AsyncCreateArticle = Loadable({
  loader: () =>
    import(/* webpackChunkName: "CreateArticle" */ 'Features/articles/components/CreateArticle'),
  loading: Loading
})

const AsyncEditArticle = Loadable({
  loader: () =>
    import(/* webpackChunkName: "EditArticle" */ 'Features/articles/components/EditArticle'),
  loading: Loading
})

const AsyncShowArticle = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ShowArticle" */ 'Features/articles/components/ShowArticle'),
  loading: Loading
})

const AsyncArticles = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Articles" */ 'Features/articles/components/Articles'),
  loading: Loading
})

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/login',
        component: AsyncSignin
      },
      {
        path: '/signup',
        component: AsyncSignup
      },
      {
        path: '/articles/new',
        component: AsyncCreateArticle
      },
      {
        path: '/articles/:id/edit',
        component: AsyncEditArticle,
        fetchData: (dispatch, { id }) => dispatch(loadArticle(id))
      },
      {
        path: '/articles/:id',
        component: AsyncShowArticle,
        fetchData: (dispatch, { id }) => dispatch(loadArticle(id))
      },
      {
        path: '/articles',
        component: AsyncArticles,
        fetchData: dispatch => dispatch(loadArticles())
      }
    ]
  }
]

export default routes
