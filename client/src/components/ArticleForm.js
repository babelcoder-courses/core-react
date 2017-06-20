import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'Components'
import styles from './ArticleForm.scss'

class ArticleForm extends PureComponent {
  static propTypes = {
    header: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    excerpt: '',
    content: ''
  }

  onSubmit = () => {
    this.props.onSubmit(this.state)
  }

  onChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { header } = this.props
    const { title, excerpt, content } = this.state

    return (
      <form>
        <h2 className={styles.title}>{header}</h2>
        <div className={styles.group}>
          <label>Title</label>
          <input type='text' name='title' onChange={this.onChange} value={title} />
        </div>
        <div className={styles.group}>
          <label>Excerpt</label>
          <textarea rows={3} name='excerpt' onChange={this.onChange} value={excerpt}  />
        </div>
        <div className={styles.group}>
          <label>Content</label>
          <textarea rows={5} name='content' onChange={this.onChange} value={content}  />
        </div>
        <div className={styles.button}>
          <Button onClick={this.onSubmit}>{header}</Button>
        </div>
      </form>
    )
  }
}

export default ArticleForm
