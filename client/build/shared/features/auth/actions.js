'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.register = register;
exports.loadAuth = loadAuth;

var _types = require('../../types');

var _reduxApiMiddleware = require('redux-api-middleware');

var _lib = require('../../lib');

var _api = require('../../lib/api');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function login(email, password) {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/sessions',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password }),
    types: [_types.LOGIN_REQUEST, {
      type: _types.LOGIN_SUCCESS,
      payload: function payload(action, state, res) {
        var token = res.headers.get('Authorization');

        (0, _lib.setToken)(token);

        return { token: token };
      }
    }, _types.LOGIN_FAILURE]
  });
}

function logout() {
  (0, _lib.clearToken)();

  return {
    type: _types.LOGOUT
  };
}

function register(email, password) {
  return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
    endpoint: _api.API_ENDPOINT + '/users',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password }),
    types: [_types.REGISTER_REQUEST, {
      type: _types.REGISTER_SUCCESS,
      payload: function payload(action, state, res) {
        var token = res.headers.get('Authorization');

        (0, _lib.setToken)(token);

        return { token: token };
      }
    }, _types.REGISTER_FAILURE]
  });
}

function loadAuth() {
  return {
    type: _types.LOAD_AUTH,
    payload: { token: (0, _lib.getToken)() }
  };
}