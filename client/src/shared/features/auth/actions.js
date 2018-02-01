import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOAD_AUTH_REQUEST,
  LOAD_AUTH_SUCCESS,
  LOAD_AUTH_FAILURE
} from '../../types'
import { CALL_API } from 'redux-api-middleware'

import { clearAuth } from 'Lib'
import { API_ENDPOINT } from 'Lib/api'

export function login(email, password) {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}/sessions`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      credentials: 'include'
    }
  }
}

export function logout() {
  clearAuth()

  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}/sessions`,
      method: 'DELETE',
      types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
      credentials: 'include'
    }
  }
}

export function register(email, password) {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}/users`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      types: [REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE],
      credentials: 'include'
    }
  }
}

export function loadAuth() {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}/users/me`,
      method: 'GET',
      types: [LOAD_AUTH_REQUEST, LOAD_AUTH_SUCCESS, LOAD_AUTH_FAILURE],
      credentials: 'include',
      headers({ auth: { accessToken } }) {
        return accessToken ? { Cookie: `accessToken=${accessToken}` } : {}
      }
    }
  }
}
