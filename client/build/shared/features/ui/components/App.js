'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = require('react-router-config');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

exports.default = function (_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: styles.content },
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};