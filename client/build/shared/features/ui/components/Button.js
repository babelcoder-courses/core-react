'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};


var Button = function Button(_ref) {
  var to = _ref.to,
      onClick = _ref.onClick,
      children = _ref.children;
  return to ? _react2.default.createElement(
    _reactRouterDom.Link,
    { to: to, className: styles.button },
    children
  ) : _react2.default.createElement(
    'button',
    { onClick: onClick, className: styles.button },
    children
  );
};

Button.propTypes = {
  link: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.any
};

Button.defaultProps = {
  isLink: false
};

exports.default = Button;