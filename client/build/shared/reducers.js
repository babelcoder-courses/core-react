'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _reducer = require('./features/articles/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./features/auth/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./features/comments/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./features/users/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require('./features/ui/reducer');

var _reducer10 = _interopRequireDefault(_reducer9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  ui: _reducer10.default,
  articles: _reducer2.default,
  auth: _reducer4.default,
  comments: _reducer6.default,
  users: _reducer8.default
});