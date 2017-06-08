import { CREATE_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE } from 'Actions'

export function createArticle(value) {
  return {
    type: CREATE_ARTICLE,
    article: {
      id: +new Date(),
      value
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
