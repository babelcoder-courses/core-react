import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS
} from '../../types'

const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ARTICLES_REQUEST:
    case LOAD_ARTICLE_REQUEST:
    case CREATE_ARTICLE_REQUEST:
    case EDIT_ARTICLE_REQUEST:
      return { ...state, isLoading: true }
    case LOAD_ARTICLES_SUCCESS:
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
    case EDIT_ARTICLE_SUCCESS:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
