'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (initialState) {
  var middlewares = [_middlewares.setToken, _reduxApiMiddleware.apiMiddleware, _reduxThunk2.default, _reduxLogger2.default];

  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares), _DevTools2.default.instrument()), typeof window !== 'undefined' ? (0, _reduxDevtools.persistState)(getDebugSessionKey()) : null);

  if (module.hot) {
    module.hot.accept('../reducers', function () {
      return store.replaceReducer(_reducers2.default);
    });
  }

  return store;
};

var _redux = require('redux');

var _reduxDevtools = require('redux-devtools');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxApiMiddleware = require('redux-api-middleware');

var _middlewares = require('../middlewares');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _DevTools = require('../features/ui/components/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDebugSessionKey() {
  var matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}