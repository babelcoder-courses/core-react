'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _NewComment = require('./NewComment');

var _NewComment2 = _interopRequireDefault(_NewComment);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = function Comments(_ref) {
  var comments = _ref.comments,
      createComment = _ref.createComment;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NewComment2.default, { onSubmit: createComment }),
    Object.keys(comments).map(function (id) {
      var _comments$id = comments[id],
          message = _comments$id.message,
          user = _comments$id.user;


      return _react2.default.createElement(_Comment2.default, { key: id, message: message, user: user.name });
    })
  );
};

Comments.propTypes = {
  comments: _propTypes2.default.objectOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    user: _propTypes2.default.shape({
      id: _propTypes2.default.number.isRequired,
      name: _propTypes2.default.string.isRequired
    }).isRequired,
    message: _propTypes2.default.string.isRequired
  }).isRequired)
};

var CommentsContainer = function CommentsContainer(_ref2) {
  var comments = _ref2.comments,
      createComment = _ref2.createComment;
  return _react2.default.createElement(Comments, { comments: comments, createComment: createComment });
};

Comments.propTypes = {
  commentIds: _propTypes2.default.arrayOf(_propTypes2.default.number.isRequired),
  createComment: _propTypes2.default.func.isRequired
};

Comments.defaultProps = {
  commentIds: []
};

exports.default = (0, _reactRedux.connect)(function (state, props) {
  return {
    comments: (0, _selectors.getCommentsByIds)(state, props)
  };
})(CommentsContainer);