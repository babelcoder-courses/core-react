import React from 'react'
import PropTypes from 'prop-types'
import { setPropTypes, compose } from 'recompose'
import { Switch, Route } from 'react-router-dom'
import { ArticleList, EditArticle } from 'Components'

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
  setPropTypes({
    articles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })).isRequired,
    onEditArticle: PropTypes.func.isRequired
  })
)(Articles)
