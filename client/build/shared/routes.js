'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _App = require('./features/ui/components/App');

var _App2 = _interopRequireDefault(_App);

var _actions = require('./features/articles/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};

var AsyncSignin = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./features/auth/components/Signin');
    });
  },
  modules: ['./features/auth/components/Signin'],
  webpack: function webpack() {
    return [require.resolveWeak('./features/auth/components/Signin')];
  },
  loading: Loading
});

var AsyncSignup = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./features/auth/components/Signup');
    });
  },
  modules: ['./features/auth/components/Signup'],
  webpack: function webpack() {
    return [require.resolveWeak('./features/auth/components/Signup')];
  },
  loading: Loading
});

var AsyncCreateArticle = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./features/articles/components/CreateArticle');
    });
  },
  modules: ['./features/articles/components/CreateArticle'],
  webpack: function webpack() {
    return [require.resolveWeak('./features/articles/components/CreateArticle')];
  },
  loading: Loading
});

var AsyncEditArticle = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./features/articles/components/EditArticle');
    });
  },
  modules: ['./features/articles/components/EditArticle'],
  webpack: function webpack() {
    return [require.resolveWeak('./features/articles/components/EditArticle')];
  },
  loading: Loading
});

var AsyncShowArticle = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./features/articles/components/ShowArticle');
    });
  },
  modules: ['./features/articles/components/ShowArticle'],
  webpack: function webpack() {
    return [require.resolveWeak('./features/articles/components/ShowArticle')];
  },
  loading: Loading
});

var AsyncArticles = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return require('./features/articles/components/Articles');
    });
  },
  modules: ['./features/articles/components/Articles'],
  webpack: function webpack() {
    return [require.resolveWeak('./features/articles/components/Articles')];
  },
  loading: Loading
});

var routes = [{
  component: _App2.default,
  routes: [{
    path: '/login',
    component: AsyncSignin
  }, {
    path: '/signup',
    component: AsyncSignup
  }, {
    path: '/articles/new',
    component: AsyncCreateArticle
  }, {
    path: '/articles/:id/edit',
    component: AsyncEditArticle,
    fetchData: function fetchData(dispatch, _ref) {
      var id = _ref.id;
      return dispatch((0, _actions.loadArticle)(id));
    }
  }, {
    path: '/articles/:id',
    component: AsyncShowArticle,
    fetchData: function fetchData(dispatch, _ref2) {
      var id = _ref2.id;
      return dispatch((0, _actions.loadArticle)(id));
    }
  }, {
    path: '/articles',
    component: AsyncArticles,
    fetchData: function fetchData(dispatch) {
      return dispatch((0, _actions.loadArticles)());
    }
  }]
}];

exports.default = routes;