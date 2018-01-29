'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../../ui/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};

var AuthForm = function (_PureComponent) {
  _inherits(AuthForm, _PureComponent);

  function AuthForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AuthForm.__proto__ || Object.getPrototypeOf(AuthForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.onChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;


      _this.setState(_defineProperty({}, name, value));
    }, _this.onSubmit = function (event) {
      event.preventDefault();

      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;


      _this.props.onSubmit(email, password);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthForm, [{
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var _state = this.state,
          email = _state.email,
          password = _state.password;


      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'h2',
          { className: styles.title },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: styles.group },
          _react2.default.createElement(
            'label',
            null,
            'Email'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'email', onChange: this.onChange, value: email })
        ),
        _react2.default.createElement(
          'div',
          { className: styles.group },
          _react2.default.createElement(
            'label',
            null,
            'Password'
          ),
          _react2.default.createElement('input', { type: 'password', name: 'password', onChange: this.onChange, value: password })
        ),
        _react2.default.createElement(
          'div',
          { className: styles.button },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.onSubmit },
            title
          )
        )
      );
    }
  }]);

  return AuthForm;
}(_react.PureComponent);

AuthForm.propTypes = {
  title: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};
exports.default = AuthForm;