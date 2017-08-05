import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { loadArticle, deleteArticle } from '../actions'
import { createComment } from 'Features/comments'
import { Loading } from 'Features/ui'
import { getArticle } from '../selectors'
import { Button } from 'Features/ui'
import { Comments } from 'Features/comments'
import styles from './ShowArticle.scss'

const ShowArticle = ({
  article,
  deleteArticle,
  createComment
}) => (
  <div>
    <h2>{article.title}</h2>
    <p>{article.content}</p>
    <div className={styles.buttons}>
      <Button to={`/articles/${article.id}/edit`}>Edit</Button>
      <Button onClick={deleteArticle}>Delete</Button>
    </div>
    <hr />
    <Comments
      createComment={createComment}
      commentIds={article.comments} />
  </div>
)

ShowArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  createComment: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired
}

class ShowArticleContainer extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { article, deleteArticle, createComment } = this.props

    if(article) {
      return (
        <ShowArticle
          article={article}
          deleteArticle={deleteArticle}
          createComment={createComment} />
      )
    } else {
      return <Loading />
    }
  }
}

export default compose(
  withRouter,
  connect(
    (state, props) => ({
      article: getArticle(state, props)
    }),
    (dispatch, { match: { params }, history }) => ({
      loadArticle() {
        dispatch(loadArticle(params.id))
      },
      deleteArticle() {
        dispatch(deleteArticle(params.id))
        history.push('/articles')
      },
      createComment(message) {
        dispatch(createComment({ articleId: params.id, message }))
      }
    })
  )
)(ShowArticleContainer)
