import Cookies from 'js-cookie'

function getTokenFromHeaders(headers) {
  return headers.get('Authorization')
}

function getToken() {
  return Cookies.get('access-token')
}

function setToken(headers) {
  Cookies.set('access-token', getTokenFromHeaders(headers))
}

function removeToken() {
  Cookies.remove('access-token')
}

export default {
  setToken,
  getToken,
  removeToken
}
