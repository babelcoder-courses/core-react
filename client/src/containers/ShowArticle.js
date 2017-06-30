import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { loadArticle, deleteArticle, createComment } from 'Actions'
import { Button, Comments, Loading } from 'Components'
import {
  getComments,
  getUsers,
  getArticle
} from 'Selectors'
import styles from './ShowArticle.scss'

class ShowArticle extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { article, comments, users, deleteArticle, createComment } = this.props

    if(article) {
      return (
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
            commentIds={article.comments}
            comments={comments}
            users={users} />
        </div>
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
      article: getArticle(state, props),
      comments: getComments(state),
      users: getUsers(state)
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
)(ShowArticle)
