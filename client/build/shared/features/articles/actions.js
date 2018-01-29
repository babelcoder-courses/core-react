'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadArticles = loadArticles;
exports.loadArticle = loadArticle;
exports.createArticle = createArticle;
exports.editArticle = editArticle;
exports.deleteArticle = deleteArticle;

var _types = require('../../types');

var _reduxApiMiddleware = require('redux-api-middleware');

var _normalizr = require('normalizr');

var _store = require('../../store');

var _api = require('../../lib/api');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loadArticles() {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/articles',
    method: 'GET',
    types: [_types.LOAD_ARTICLES_REQUEST, {
      type: _types.LOAD_ARTICLES_SUCCESS,
      payload: function payload(action, state, res) {
        return res.json().then(function (json) {
          return (0, _normalizr.normalize)(json, { articles: [_store.articleSchema] });
        });
      }
    }, _types.LOAD_ARTICLES_FAILURE]
  });
}

function loadArticle(id) {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/articles/' + id,
    method: 'GET',
    types: [_types.LOAD_ARTICLE_REQUEST, {
      type: _types.LOAD_ARTICLE_SUCCESS,
      payload: function payload(action, state, res) {
        return res.json().then(function (json) {
          return (0, _normalizr.normalize)(json, { article: _store.articleSchema });
        });
      }
    }, _types.LOAD_ARTICLE_FAILURE]
  });
}

function createArticle(article) {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/articles',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article),
    types: [_types.CREATE_ARTICLE_REQUEST, {
      type: _types.CREATE_ARTICLE_SUCCESS,
      payload: function payload(action, state, res) {
        return res.json().then(function (json) {
          return (0, _normalizr.normalize)(json, { article: _store.articleSchema });
        });
      }
    }, _types.CREATE_ARTICLE_FAILURE]
  });
}

function editArticle(id, article) {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/articles/' + id,
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article),
    types: [_types.EDIT_ARTICLE_REQUEST, {
      type: _types.EDIT_ARTICLE_SUCCESS,
      payload: function payload(action, state, res) {
        return res.json().then(function (json) {
          return (0, _normalizr.normalize)(json, { article: _store.articleSchema });
        });
      }
    }, _types.EDIT_ARTICLE_FAILURE]
  });
}

function deleteArticle(id) {
  return {
    type: _types.DELETE_ARTICLE,
    id: id
  };
}