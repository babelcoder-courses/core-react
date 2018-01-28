if (typeof localStorage === 'undefined') {
  global.localStorage = { setItem() {}, getItem() {}, clearToken() {} }
}

export function setToken(token) {
  localStorage.setItem('access-token', token)
}

export function getToken() {
  return localStorage.getItem('access-token')
}

export function clearToken() {
  localStorage.removeItem('access-token')
}
