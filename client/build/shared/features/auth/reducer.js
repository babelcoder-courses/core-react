'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('../../types');

var _lib = require('../../lib');

var initialState = {
  token: (0, _lib.getToken)()
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.LOGIN_SUCCESS:
    case _types.REGISTER_SUCCESS:
    case _types.LOAD_AUTH:
      return { token: action.payload.token };
    case _types.LOGOUT:
      return { token: null };
    default:
      return state;
  }
};