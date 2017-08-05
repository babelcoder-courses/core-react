import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
  DELETE_ARTICLE,
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE
} from '../../types'
import { CALL_API } from 'redux-api-middleware'
import { normalize } from 'normalizr'
import { articleSchema } from '../../store'

export function loadArticles() {
  return {
    [CALL_API]: {
      endpoint: '/api/articles',
      method: 'GET',
      types: [
        LOAD_ARTICLES_REQUEST,
        {
          type: LOAD_ARTICLES_SUCCESS,
          payload(action, state, res) {
            return res
              .json()
              .then(json => normalize(json, { articles: [articleSchema] }))
          }
        },
        LOAD_ARTICLES_FAILURE
      ]
    }
  }
}

export function loadArticle(id) {
  return {
    [CALL_API]: {
      endpoint: `/api/articles/${id}`,
      method: 'GET',
      types: [
        LOAD_ARTICLE_REQUEST,
        {
          type: LOAD_ARTICLE_SUCCESS,
          payload(action, state, res) {
            return res
              .json()
              .then(json => normalize(json, { article: articleSchema }))
          }
        },
        LOAD_ARTICLE_FAILURE
      ]
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
      types: [
        CREATE_ARTICLE_REQUEST,
        {
          type: CREATE_ARTICLE_SUCCESS,
          payload(action, state, res) {
            return res
              .json()
              .then(json => normalize(json, { article: articleSchema }))
          }
        },
        CREATE_ARTICLE_FAILURE
      ]
    }
  }
}

export function editArticle(id, article) {
  return {
    [CALL_API]: {
      endpoint: `/api/articles/${id}`,
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article),
      types: [
        EDIT_ARTICLE_REQUEST,
        {
          type: EDIT_ARTICLE_SUCCESS,
          payload(action, state, res) {
            return res
              .json()
              .then(json => normalize(json, { article: articleSchema }))
          }
        },
        EDIT_ARTICLE_FAILURE
      ]
    }
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    id
  }
}
