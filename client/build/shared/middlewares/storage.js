'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require('../lib');

exports.default = function (store) {
  return function (dispatch) {
    return function (action) {
      var result = dispatch(action);
      (0, _lib.saveState)(store.getState());
      return result;
    };
  };
};