import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { loadArticle, deleteArticle } from 'Actions'
import { Button, Comments, Loading } from 'Components'
import styles from './ShowArticle.scss'

class ShowArticle extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { article, deleteArticle } = this.props

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
          <Comments comments={article.comments} />
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
    ({ articles: { items } }, { match }) => ({
      article: items.find(article => article.id === +match.params.id)
    }),
    (dispatch, { match: { params }, history }) => ({
      loadArticle() {
        dispatch(loadArticle(params.id))
      },
      deleteArticle() {
        dispatch(deleteArticle(params.id))
        history.push('/articles')
      }
    })
  )
)(ShowArticle)
