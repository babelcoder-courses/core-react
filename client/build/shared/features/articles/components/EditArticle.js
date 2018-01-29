'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _reactRouter = require('react-router');

var _actions = require('../actions');

var _selectors = require('../selectors');

var _ArticleForm = require('./ArticleForm');

var _ArticleForm2 = _interopRequireDefault(_ArticleForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditArticleContainer = function (_PureComponent) {
  _inherits(EditArticleContainer, _PureComponent);

  function EditArticleContainer() {
    _classCallCheck(this, EditArticleContainer);

    return _possibleConstructorReturn(this, (EditArticleContainer.__proto__ || Object.getPrototypeOf(EditArticleContainer)).apply(this, arguments));
  }

  _createClass(EditArticleContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadArticle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          editArticle = _props.editArticle,
          article = _props.article;


      return _react2.default.createElement(_ArticleForm2.default, {
        initialValues: article,
        header: 'Edit Article',
        onSubmit: editArticle });
    }
  }]);

  return EditArticleContainer;
}(_react.PureComponent);

exports.default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(function (state, props) {
  return {
    article: (0, _selectors.getArticle)(state, props)
  };
}, function (dispatch, _ref) {
  var params = _ref.match.params,
      history = _ref.history;
  return {
    editArticle: function editArticle(article) {
      dispatch((0, _actions.editArticle)(params.id, article));
      history.push('/articles');
    },
    loadArticle: function loadArticle() {
      dispatch((0, _actions.loadArticle)(params.id));
    }
  };
}))(EditArticleContainer);