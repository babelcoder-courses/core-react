'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = require('react-loadable/webpack');

var _reactRouterConfig = require('react-router-config');

var _reactLoadable3 = require('../../dist/react-loadable.json');

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _routes = require('../shared/routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('../shared/store');

var _renderHtml = require('./renderHtml');

var _renderHtml2 = _interopRequireDefault(_renderHtml);

var _App = require('../shared/features/ui/components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 8080;
var app = (0, _express2.default)();
var targetUrl = process.env.API_URL;
var proxy = _httpProxy2.default.createProxyServer({
  target: targetUrl
});

app.use('/dist', _express2.default.static(_path2.default.join(__dirname, '../..', 'dist')));

app.use('/api', function (req, res) {
  proxy.web(req, res, { target: targetUrl + '/api' });
});

app.get('*', function (req, res) {
  var store = (0, _store.configureStore)();
  var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
  var promises = branch.map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;

    var fetchData = route.fetchData;
    return fetchData instanceof Function ? fetchData(store.dispatch, match.params) : Promise.resolve(null);
  });

  return Promise.all(promises).then(function (data) {
    var context = {};
    var modules = [];
    var content = _React2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _React2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    );

    var html = _server2.default.renderToString(_React2.default.createElement(
      _reactLoadable2.default.Capture,
      { report: function report(moduleName) {
          return modules.push(moduleName);
        } },
      content
    ));
    var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);

    res.status(200).send((0, _renderHtml2.default)(html, store.getState(), bundles));
  });
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port ' + PORT + '.');
  }
});