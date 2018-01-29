'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToken = setToken;
exports.getToken = getToken;
exports.clearToken = clearToken;
if (typeof localStorage === 'undefined') {
  global.localStorage = {
    setItem: function setItem() {},
    getItem: function getItem() {},
    clearToken: function clearToken() {}
  };
}

function setToken(token) {
  localStorage.setItem('access-token', token);
}

function getToken() {
  return localStorage.getItem('access-token');
}

function clearToken() {
  localStorage.removeItem('access-token');
}