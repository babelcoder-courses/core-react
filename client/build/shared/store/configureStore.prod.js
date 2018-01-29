'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (initialState) {
  var middlewares = [_middlewares.setToken, _reduxApiMiddleware.apiMiddleware, _reduxThunk2.default];

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.applyMiddleware.apply(undefined, middlewares));

  return store;
};

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxApiMiddleware = require('redux-api-middleware');

var _middlewares = require('../middlewares');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }