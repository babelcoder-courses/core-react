import React, { PureComponent } from 'react'
import { Button } from 'Features/ui'
import styles from './NewComment.scss'

class NewComment extends PureComponent {
  state = {
    comment: ''
  }

  onCommentChange = event => {
    this.setState({ comment: event.target.value })
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div className={styles.container}>
        <textarea
          rows='5'
          onChange={this.onCommentChange}
          value={this.state.comment}></textarea>
        <div className={styles.button}>
          <Button onClick={this.onSubmit}>Comment</Button>
        </div>
      </div>
    )
  }
}

export default NewComment
