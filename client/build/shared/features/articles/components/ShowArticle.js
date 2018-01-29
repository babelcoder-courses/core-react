'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _reactRouter = require('react-router');

var _actions = require('../actions');

var _actions2 = require('../../comments/actions');

var _Loading = require('../../ui/components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _selectors = require('../selectors');

var _Button = require('../../ui/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Comments = require('../../comments/components/Comments');

var _Comments2 = _interopRequireDefault(_Comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'buttons': 'ShowArticle__buttons___seKiZ'
};


var ShowArticle = function ShowArticle(_ref) {
  var article = _ref.article,
      deleteArticle = _ref.deleteArticle,
      createComment = _ref.createComment;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      article.title
    ),
    _react2.default.createElement(
      'p',
      null,
      article.content
    ),
    _react2.default.createElement(
      'div',
      { className: styles.buttons },
      _react2.default.createElement(
        _Button2.default,
        { to: '/articles/' + article.id + '/edit' },
        'Edit'
      ),
      _react2.default.createElement(
        _Button2.default,
        { onClick: deleteArticle },
        'Delete'
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(_Comments2.default, { createComment: createComment, commentIds: article.comments })
  );
};

ShowArticle.propTypes = {
  article: _propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    content: _propTypes2.default.string.isRequired
  }).isRequired,
  createComment: _propTypes2.default.func.isRequired,
  deleteArticle: _propTypes2.default.func.isRequired
};

var ShowArticleContainer = function (_PureComponent) {
  _inherits(ShowArticleContainer, _PureComponent);

  function ShowArticleContainer() {
    _classCallCheck(this, ShowArticleContainer);

    return _possibleConstructorReturn(this, (ShowArticleContainer.__proto__ || Object.getPrototypeOf(ShowArticleContainer)).apply(this, arguments));
  }

  _createClass(ShowArticleContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadArticle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          article = _props.article,
          deleteArticle = _props.deleteArticle,
          createComment = _props.createComment;


      if (article) {
        return _react2.default.createElement(ShowArticle, {
          article: article,
          deleteArticle: deleteArticle,
          createComment: createComment
        });
      } else {
        return _react2.default.createElement(_Loading2.default, null);
      }
    }
  }]);

  return ShowArticleContainer;
}(_react.PureComponent);

exports.default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(function (state, props) {
  return {
    article: (0, _selectors.getArticle)(state, props)
  };
}, function (dispatch, _ref2) {
  var params = _ref2.match.params,
      history = _ref2.history;
  return {
    loadArticle: function loadArticle() {
      dispatch((0, _actions.loadArticle)(params.id));
    },
    deleteArticle: function deleteArticle() {
      dispatch((0, _actions.deleteArticle)(params.id));
      history.push('/articles');
    },
    createComment: function createComment(message) {
      dispatch((0, _actions2.createComment)({ articleId: params.id, message: message }));
    }
  };
}))(ShowArticleContainer);