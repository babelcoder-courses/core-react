'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reduxApiMiddleware = require('redux-api-middleware');

var _lib = require('../lib');

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var entry = action[_reduxApiMiddleware.CALL_API];

      if ((typeof entry === 'undefined' ? 'undefined' : _typeof(entry)) !== 'object') return next(action);

      var token = (0, _lib.getToken)();

      if (!token) return next(action);

      entry.headers = _extends({}, entry.headers, { 'Authorization': (0, _lib.getToken)() });

      next(action);
    };
  };
};