import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { Auth } from '../lib'
import { ArticleForm } from '../components'

class EditArticleContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: numericString().isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    title: '',
    content: ''
  }

  componentDidMount() {
    this.loadArticle()
  }

  editArticle = article => {
    fetch(`/articles/${this.props.match.params.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      },
      body: JSON.stringify({
        ...article
      })
    })
      .then(res => res.json())
      .then(({ article: { id } }) =>
        this.props.history.push(`/articles/${id}`)
      )
  }

  loadArticle() {
    fetch(`/articles/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(({ article }) => this.setState({ ...article }))
  }

  render() {
    return (
      <ArticleForm
        {...this.state}
        formType='Edit'
        onSubmit={this.editArticle} />
    )
  }
}

export default EditArticleContainer
