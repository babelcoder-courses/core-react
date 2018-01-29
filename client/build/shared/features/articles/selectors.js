'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = undefined;
exports.getArticle = getArticle;

var _reselect = require('reselect');

function getArticle(state, props) {
  return state.articles[+props.match.params.id];
}

var getArticles = exports.getArticles = (0, _reselect.createSelector)(function (state) {
  return state.articles;
}, function (articles) {
  return Object.values(articles);
});