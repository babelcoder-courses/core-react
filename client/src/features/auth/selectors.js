export function getIsLoggedIn(state) {
  return !!state.auth.token
}
