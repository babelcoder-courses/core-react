'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveState = saveState;
exports.loadState = loadState;
function saveState(state) {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (err) {}
}

function loadState() {
  try {
    var serializedState = localStorage.getItem('state');

    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
}