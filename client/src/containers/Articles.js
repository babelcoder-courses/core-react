import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'
import { Switch, Route } from 'react-router-dom'
import { ArticleList, EditArticle } from 'Components'
import { ArticleStore } from 'Stores'

const Articles = ({ onEditArticle }) => (
  <Switch>
    <Route
      exact
      path='/articles'
      render={() => <ArticleList articles={ArticleStore.getState()} />} />
    <Route
      path='/articles/:id/edit'
      render={
        ({ match: { params } }) =>
          <EditArticle
            {...ArticleStore.getState().find(article => article.id === +params.id)}
            onSubmit={onEditArticle} />
      }
    />
  </Switch>
)

export default compose(
  withRouter,
  withHandlers({
    onEditArticle: ({ history }) => (id, article) => {
      ArticleStore.editArticle(id, article)

      history.push('/articles')
    }
  })
)(Articles)
