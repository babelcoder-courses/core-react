'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = require('./localStorage');

Object.keys(_localStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _localStorage[key];
    }
  });
});

var _auth = require('./auth');

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

var _api = require('./api');

Object.defineProperty(exports, 'api', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_api).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }