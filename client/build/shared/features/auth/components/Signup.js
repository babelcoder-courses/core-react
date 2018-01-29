'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../actions');

var _AuthForm = require('./AuthForm');

var _AuthForm2 = _interopRequireDefault(_AuthForm);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_PureComponent) {
  _inherits(Signup, _PureComponent);

  function Signup() {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).apply(this, arguments));
  }

  _createClass(Signup, [{
    key: 'render',
    value: function render() {
      if (this.props.isLoggedIn) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      } else {
        return _react2.default.createElement(_AuthForm2.default, { title: 'Register', onSubmit: this.props.register });
      }
    }
  }]);

  return Signup;
}(_react.PureComponent);

exports.default = (0, _reactRedux.connect)(function (state) {
  return { isLoggedIn: (0, _selectors.getIsLoggedIn)(state) };
}, { register: _actions.register })(Signup);