import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Articles, Users, Header } from 'Components'

class App extends Component {
  state = {
    articles: [
      { id: 1, title: 'My Article#1', content: 'My Content#1', authorId: 1 },
      { id: 2, title: 'My Article#2', content: 'My Content#2', authorId: 2 },
      { id: 3, title: 'My Article#3', content: 'My Content#3', authorId: 1 },
      { id: 4, title: 'My Article#4', content: 'My Content#4', authorId: 2 },
      { id: 5, title: 'My Article#5', content: 'My Content#5', authorId: 1 },
      { id: 6, title: 'My Article#6', content: 'My Content#6', authorId: 1 }
    ],

    users: [
      { id: 1, name: 'User#1' },
      { id: 2, name: 'User#2' }
    ]
  }

  onEditArticle = (id, article) => {
    this.setState(
      ({ articles }) => ({
        articles: articles.map(
          item => item.id === id ? { ...item, ...article } : item
        )
      })
    , () => this.props.history.push('/articles'))
  }

  render() {
    return (
      <div>
        <Header />
        <Articles
          articles={this.state.articles}
          onEditArticle={this.onEditArticle} />
        <Users users={this.state.users} />
      </div>
    )
  }
}

export default withRouter(App)
