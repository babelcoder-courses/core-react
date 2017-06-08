import { saveState } from 'Lib'

export default store => dispatch => action => {
  const result = dispatch(action)
  saveState(store.getState())
  return result
}
