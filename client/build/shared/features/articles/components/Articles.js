'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Article = require('./Article');

var _Article2 = _interopRequireDefault(_Article);

var _Button = require('../../ui/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Loading = require('../../ui/components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _selectors = require('../selectors');

var _selectors2 = require('../../ui/selectors');

var _selectors3 = require('../../auth/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'container': 'Articles__container___JOhhR',
  'new-article': 'Articles__new-article___2h16k'
};


var Articles = function Articles(_ref) {
  var isLoading = _ref.isLoading,
      isLoggedIn = _ref.isLoggedIn,
      articles = _ref.articles;
  return _react2.default.createElement(
    'div',
    { className: styles.container },
    isLoading && _react2.default.createElement(_Loading2.default, null),
    isLoggedIn && _react2.default.createElement(
      'div',
      { className: styles['new-article'] },
      _react2.default.createElement(
        _Button2.default,
        { to: '/articles/new' },
        'New Article'
      )
    ),
    _react2.default.createElement('hr', null),
    articles.map(function (article) {
      return _react2.default.createElement(_Article2.default, _extends({ key: article.id }, article));
    })
  );
};

var ArticlesContainer = function (_PureComponent) {
  _inherits(ArticlesContainer, _PureComponent);

  function ArticlesContainer() {
    _classCallCheck(this, ArticlesContainer);

    return _possibleConstructorReturn(this, (ArticlesContainer.__proto__ || Object.getPrototypeOf(ArticlesContainer)).apply(this, arguments));
  }

  _createClass(ArticlesContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadArticles();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          isLoggedIn = _props.isLoggedIn,
          articles = _props.articles;


      return _react2.default.createElement(Articles, {
        isLoading: isLoading,
        isLoggedIn: isLoggedIn,
        articles: articles
      });
    }
  }]);

  return ArticlesContainer;
}(_react.PureComponent);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    articles: (0, _selectors.getArticles)(state),
    isLoading: (0, _selectors2.getIsLoading)(state),
    isLoggedIn: (0, _selectors3.getIsLoggedIn)(state)
  };
}, { loadArticles: _actions.loadArticles })(ArticlesContainer);