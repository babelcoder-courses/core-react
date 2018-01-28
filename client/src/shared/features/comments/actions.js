import { CALL_API } from 'redux-api-middleware'

import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../../types'
import { API_ENDPOINT } from 'Lib/api'

export function createComment(comment) {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}/comments`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment),
      types: [
        CREATE_COMMENT_REQUEST,
        CREATE_COMMENT_SUCCESS,
        CREATE_COMMENT_FAILURE
      ]
    }
  }
}
