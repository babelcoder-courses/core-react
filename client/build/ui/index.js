'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _Root = require('../shared/features/ui/components/Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(Component) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(Component, null)
  ), document.getElementById('root'));
};

render(_Root2.default);

if (module.hot) {
  module.hot.accept('Features/ui/components/Root', function () {
    return render(_Root2.default);
  });
}