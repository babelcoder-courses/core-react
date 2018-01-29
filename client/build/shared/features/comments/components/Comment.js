'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};


var Comment = function Comment(_ref) {
  var user = _ref.user,
      message = _ref.message;
  return _react2.default.createElement(
    'div',
    { className: styles.comment },
    _react2.default.createElement(
      'div',
      { className: styles.user },
      user
    ),
    _react2.default.createElement(
      'div',
      { className: styles.message },
      message
    )
  );
};

Comment.propTypes = {
  user: _propTypes2.default.string.isRequired,
  message: _propTypes2.default.string.isRequired
};

exports.default = Comment;