'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var CALL_API = exports.CALL_API = Symbol('CALL_API');

function getAction(type, action, state, res) {
  return new Promise(function (resolve) {
    if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
      return resolve({ type: type.type, payload: type.payload(action, state, res) });
    }

    if (!res) return resolve({ type: type });

    res.json().then(function (payload) {
      return resolve({ type: type, payload: payload });
    });
  });
}

exports.default = function (_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (_typeof(action[CALL_API]) !== 'object') return next(action);

      var _action$CALL_API = action[CALL_API],
          endpoint = _action$CALL_API.endpoint,
          _action$CALL_API$meth = _action$CALL_API.method,
          method = _action$CALL_API$meth === undefined ? 'GET' : _action$CALL_API$meth,
          headers = _action$CALL_API.headers,
          body = _action$CALL_API.body,
          types = _action$CALL_API.types;

      var _types = _slicedToArray(types, 2),
          request = _types[0],
          success = _types[1];

      var state = getState();

      getAction(request, action, state).then(function (action) {
        return next(action);
      });

      fetch(endpoint, { method: method, headers: headers, body: body }).then(function (res) {
        return getAction(success, action, state, res);
      }).then(function (action) {
        return next(action);
      });
    };
  };
};