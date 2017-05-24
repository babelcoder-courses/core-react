import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { Switch, Route } from 'react-router-dom'
import { ArticleList, EditArticle } from 'Components'
import { editArticle } from 'Actions'
import { connect } from 'Lib'

const Articles = ({ articles, onEditArticle }) => (
  <Switch>
    <Route
      exact
      path='/articles'
      render={() => <ArticleList articles={articles} />} />
    <Route
      path='/articles/:id/edit'
      render={
        ({ match: { params } }) =>
          <EditArticle
            {...articles.find(article => article.id === +params.id)}
            onSubmit={onEditArticle} />
      }
    />
  </Switch>
)

export default compose(
  withRouter,
  connect(
    ({ articles }) => ({
      articles
    }),
    (dispatch, { history }) => ({
      onEditArticle(id, article) {
        dispatch(editArticle(id, article))

        history.push('/articles')
      }
    })
  )
)(Articles)
