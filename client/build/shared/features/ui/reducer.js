'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('../../types');

var initialState = {
  isLoading: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.LOAD_ARTICLES_REQUEST:
    case _types.LOAD_ARTICLE_REQUEST:
    case _types.CREATE_ARTICLE_REQUEST:
    case _types.EDIT_ARTICLE_REQUEST:
      return _extends({}, state, { isLoading: true });
    case _types.LOAD_ARTICLES_SUCCESS:
    case _types.LOAD_ARTICLE_SUCCESS:
    case _types.CREATE_ARTICLE_SUCCESS:
    case _types.EDIT_ARTICLE_SUCCESS:
      return _extends({}, state, { isLoading: false });
    default:
      return state;
  }
};