import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { Auth } from '../lib'

class ArticleContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: numericString().isRequired
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    title: '',
    content: ''
  }

  componentDidMount() {
    this.loadArticle()
  }

  loadArticle() {
    const { id } = this.props.match.params

    fetch(`/articles/${id}`)
      .then(res => res.json())
      .then(({ article }) => this.setState({ ...article }))
  }

  backToPreviousUrl = () => {
    this.props.history.goBack()
  }

  render() {
    const { id } = this.props.match.params
    const { title, content } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="btn-group">
          <button
            className="btn btn-sm btn-primary"
            onClick={this.backToPreviousUrl}>Back</button>
            {
              Auth.getToken() && (
                <Link
                  to={`/articles/${id}/edit`}
                  className='btn btn-sm btn-secondary'>Edit</Link>
              )
            }
        </div>
      </div>
    )
  }
}

export default ArticleContainer
