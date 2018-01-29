'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComment = createComment;

var _reduxApiMiddleware = require('redux-api-middleware');

var _types = require('../../types');

var _api = require('../../lib/api');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createComment(comment) {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/comments',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment),
    types: [_types.CREATE_COMMENT_REQUEST, _types.CREATE_COMMENT_SUCCESS, _types.CREATE_COMMENT_FAILURE]
  });
}