'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../../types');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.LOAD_ARTICLES_REQUEST:
    case _types.LOAD_ARTICLE_REQUEST:
    case _types.CREATE_ARTICLE_REQUEST:
    case _types.EDIT_ARTICLE_REQUEST:
      return initialState;
    case _types.LOAD_ARTICLES_SUCCESS:
    case _types.LOAD_ARTICLE_SUCCESS:
    case _types.CREATE_ARTICLE_SUCCESS:
    case _types.EDIT_ARTICLE_SUCCESS:
      return action.payload.entities.articles;
    case _types.DELETE_ARTICLE:
      {
        var index = state.findIndex(function (article) {
          return article.id === +action.id;
        });

        return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
      }
    default:
      return state;
  }
};