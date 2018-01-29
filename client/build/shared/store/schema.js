'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articleSchema = exports.commentSchema = exports.userSchema = undefined;

var _normalizr = require('normalizr');

var userSchema = exports.userSchema = new _normalizr.schema.Entity('users');

var commentSchema = exports.commentSchema = new _normalizr.schema.Entity('comments', {
  user: userSchema
});

var articleSchema = exports.articleSchema = new _normalizr.schema.Entity('articles', {
  comments: [commentSchema]
});