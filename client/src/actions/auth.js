import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT
} from 'Actions'
import { CALL_API } from 'redux-api-middleware'
import { setToken, clearToken } from 'Lib'

export function login(email, password) {
  return {
    [CALL_API]: {
      endpoint: '/api/sessions',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      types: [
        LOGIN_REQUEST,
        {
          type: LOGIN_SUCCESS,
          payload(action, state, res) {
            const token = res.headers.get('Authorization')

            setToken(token)

            return { token }
          }
        },
        LOGIN_FAILURE
      ]
    }
  }
}

export function logout() {
  clearToken()

  return {
    type: LOGOUT
  }
}

export function register(email, password) {
  return {
    [CALL_API]: {
      endpoint: '/api/users',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      types: [
        REGISTER_REQUEST,
        {
          type: REGISTER_SUCCESS,
          payload(action, state, res) {
            const token = res.headers.get('Authorization')

            setToken(token)

            return { token }
          }
        },
        REGISTER_FAILURE
      ]
    }
  }
}
