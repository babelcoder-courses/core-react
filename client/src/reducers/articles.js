import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  DELETE_ARTICLE,
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS
} from 'Actions'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ARTICLES_REQUEST:
    case LOAD_ARTICLE_REQUEST:
    case CREATE_ARTICLE_REQUEST:
    case EDIT_ARTICLE_REQUEST:
      return initialState
    case LOAD_ARTICLES_SUCCESS:
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
    case EDIT_ARTICLE_SUCCESS:
      return action.payload.entities.articles
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
