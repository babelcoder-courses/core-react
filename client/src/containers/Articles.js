import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setPropTypes, withState, lifecycle, compose, withHandlers } from 'recompose'
import { Switch, Route } from 'react-router-dom'
import { ArticleList, EditArticle } from 'Components'
import { editArticle } from 'Actions'

const Articles = ({ store, onEditArticle }) => (
  <Switch>
    <Route
      exact
      path='/articles'
      render={() => <ArticleList articles={store.getState().articles} />} />
    <Route
      path='/articles/:id/edit'
      render={
        ({ match: { params } }) =>
          <EditArticle
            {...store.getState().articles.find(article => article.id === +params.id)}
            onSubmit={onEditArticle} />
      }
    />
  </Switch>
)

export default compose(
  withRouter,
  withHandlers({
    onEditArticle: ({ store, history }) => (id, article) => {
      store.dispatch(editArticle(id, article))

      history.push('/articles')
    }
  }),
  withState('subscription', 'setSubscription', null),
  lifecycle({
    componentDidMount() {
      const subscription = this.props.store.subscribe(
        () => this.forceUpdate()
      )

      this.props.setSubscription(() => subscription)
    },

    componentWillUnmount() {
      this.props.subscription()
    }
  }),
  setPropTypes({
    store: PropTypes.object.isRequired
  })
)(Articles)
