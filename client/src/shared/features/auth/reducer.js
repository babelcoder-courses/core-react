import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOAD_AUTH_SUCCESS
} from '../../types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_AUTH_SUCCESS:
      return { ...action.payload.user }
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}
