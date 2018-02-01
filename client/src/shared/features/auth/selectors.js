export function getIsLoggedIn(state) {
  return Object.keys(state.auth).length > 0
}
