'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommentsByIds = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getComments = getComments;

var _reselect = require('reselect');

var _selectors = require('../users/selectors');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commentsByIds = function commentsByIds(_ref, _ref2) {
  var comments = _ref.comments;
  var commentIds = _ref2.commentIds;
  return commentIds ? Object.entries(comments).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    return commentIds.includes(+k);
  }).reduce(function (result, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    return _extends({}, result, _defineProperty({}, k, v));
  }, {}) : {};
};

var usersByCommentIds = function usersByCommentIds(state, props) {
  return (0, _selectors.getUsersByIds)(state, {
    userIds: Object.values(commentsByIds(state, props)).map(function (comment) {
      return comment.user;
    })
  });
};

function getComments(state) {
  return state.comments;
}

var getCommentsByIds = exports.getCommentsByIds = (0, _reselect.createSelector)(commentsByIds, usersByCommentIds, function (comments, users) {
  return Object.entries(comments).reduce(function (result, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        k = _ref8[0],
        v = _ref8[1];

    return _extends({}, result, _defineProperty({}, k, _extends({}, v, { user: users[v.user] })));
  }, {});
});