import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE
} from 'Actions'
import { CALL_API } from 'redux-api-middleware'

export function loadArticles() {
  return {
    [CALL_API]: {
      endpoint: '/api/articles',
      method: 'GET',
      types: [LOAD_ARTICLES_REQUEST, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_FAILURE]
    }
  }
}

export function loadArticle(id) {
  return {
    [CALL_API]: {
      endpoint: `/api/articles/${id}`,
      method: 'GET',
      types: [LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_FAILURE]
    }
  }
}

export function createArticle(article) {
  return {
    [CALL_API]: {
      endpoint: '/api/articles',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article),
      types: [CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE]
    }
  }
}

export function editArticle(id, value) {
  return {
    type: EDIT_ARTICLE,
    id,
    article: {
      value
    }
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    id
  }
}
