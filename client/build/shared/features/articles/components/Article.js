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


var Article = function Article(_ref) {
  var id = _ref.id,
      title = _ref.title,
      excerpt = _ref.excerpt;
  return _react2.default.createElement(
    'div',
    { className: styles.article },
    _react2.default.createElement(
      'div',
      { className: styles.header },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/articles/' + id, className: styles.title },
        title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: styles.excerpt },
      excerpt
    )
  );
};

Article.propTypes = {
  id: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  excerpt: _propTypes2.default.string.isRequired
};

exports.default = Article;