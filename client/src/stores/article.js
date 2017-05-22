export default {
  state: [
    { id: 1, title: 'My Article#1', content: 'My Content#1', authorId: 1 },
    { id: 2, title: 'My Article#2', content: 'My Content#2', authorId: 2 },
    { id: 3, title: 'My Article#3', content: 'My Content#3', authorId: 1 },
    { id: 4, title: 'My Article#4', content: 'My Content#4', authorId: 2 },
    { id: 5, title: 'My Article#5', content: 'My Content#5', authorId: 1 },
    { id: 6, title: 'My Article#6', content: 'My Content#6', authorId: 1 }
  ],

  getState() {
    return this.state
  },

  editArticle(id, article) {
    this.state = this.state.map(
      item => item.id === id ? { ...item, ...article } : item
    )
  }
}
