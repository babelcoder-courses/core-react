import { createSelector } from 'reselect'

export function getArticle(state, props) {
  return state.articles.items[+props.match.params.id]
}

export const getArticles = createSelector(
  state => state.articles,
  articles => Object.values(articles.items)
)

export function getIsArticleLoading(state) {
  return state.articles.isLoading
}
