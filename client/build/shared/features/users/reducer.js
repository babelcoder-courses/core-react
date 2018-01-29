'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../../types');

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _types.LOAD_ARTICLE_SUCCESS:
    case _types.EDIT_ARTICLE_SUCCESS:
      return action.payload.entities.users || state;
    default:
      return state;
  }
};