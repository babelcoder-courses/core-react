export const editArticle = (id, article) => {
  return {
    type: 'EDIT_ARTICLE',
    id,
    article
  }
}
