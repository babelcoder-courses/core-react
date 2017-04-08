import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { Auth } from '../lib'
import { ArticleForm } from '../components'

class NewArticleContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryId: numericString().isRequired
      }).isRequired
    }).isRequired
  }

  createArticle = article => {
    fetch('/articles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      },
      body: JSON.stringify({
        ...article, categoryId: this.props.match.params.categoryId
      })
    })
      .then(res => res.json())
      .then(({ article: { id } }) =>
        this.props.history.push(`/articles/${id}`)
      )
  }

  render() {
    return (
      <ArticleForm
        formType='Create'
        onSubmit={this.createArticle} />
    )
  }
}

export default NewArticleContainer
