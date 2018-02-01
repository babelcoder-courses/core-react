if (typeof localStorage === 'undefined') {
  global.localStorage = { setItem() {}, getItem() {}, clearToken() {} }
}

export function setAuth(token) {
  localStorage.setItem('auth', token)
}

export function getAuth() {
  return localStorage.getItem('auth')
}

export function clearAuth() {
  localStorage.removeItem('auth')
}
