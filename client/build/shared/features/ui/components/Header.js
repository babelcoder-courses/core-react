'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _recompose = require('recompose');

var _actions = require('../../auth/actions');

var _selectors = require('../../auth/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};


var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      logout = _ref.logout;
  return _react2.default.createElement(
    'header',
    { className: styles.header },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/articles', className: styles['nav-link'] },
      'Articles'
    ),
    isLoggedIn ? _react2.default.createElement(
      'div',
      { className: styles.auth },
      _react2.default.createElement(
        'a',
        { href: '#', className: styles['nav-link'], onClick: logout },
        'Logout'
      )
    ) : _react2.default.createElement(
      'div',
      { className: styles.auth },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/login', className: styles['auth-link'] },
        'Signin'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/signup', className: styles['auth-link'] },
        'Signup'
      )
    )
  );
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(function (state) {
  return {
    isLoggedIn: (0, _selectors.getIsLoggedIn)(state)
  };
}, { logout: _actions.logout, loadAuth: _actions.loadAuth }), (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    this.props.loadAuth();
  }
}))(Header);