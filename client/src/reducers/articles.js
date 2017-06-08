import { CREATE_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE } from 'Actions'

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_ARTICLE:
      return [...state, action.article]
    case EDIT_ARTICLE: {
      const index = state.findIndex(article => article.id === +action.id)
      const article = state[index]

      return [
        ...state.slice(0, index),
        { ...article, ...action.article },
        ...state.slice(index + 1)
      ]
    }
    case DELETE_ARTICLE: {
      const index = state.findIndex(article => article.id === +action.id)

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    }
    default:
      return state
  }
}
