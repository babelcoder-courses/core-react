export function saveState(state) {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch(err) {

  }
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem('state')

    return serializedState ? JSON.parse(serializedState) : undefined
  } catch(err) {
    return undefined
  }
}
