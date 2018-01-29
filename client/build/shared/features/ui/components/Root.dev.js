'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _reactRouterConfig = require('react-router-config');

var _store = require('../../../store');

var _routes = require('../../../routes');

var _routes2 = _interopRequireDefault(_routes);

var _DevTools = require('./DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

var store = (0, _store.configureStore)(preloadedState);

exports.default = function () {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      ),
      _react2.default.createElement(_DevTools2.default, null)
    )
  );
};