import { createSelector } from 'reselect'

export function getArticle(state, props) {
  return state.articles[+props.match.params.id]
}

export const getArticles = createSelector(
  state => state.articles,
  articles => Object.values(articles)
)

