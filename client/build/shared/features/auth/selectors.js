"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsLoggedIn = getIsLoggedIn;
function getIsLoggedIn(state) {
  return !!state.auth.token;
}