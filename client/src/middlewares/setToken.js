import { CALL_API } from 'redux-api-middleware'
import { getToken } from 'Lib'

export default store => next => action => {
  const entry = action[CALL_API]

  if(typeof entry !== 'object') return next(action)

  const token = getToken()

  if(!token) return next(action)

  entry.headers = { ...entry.headers, 'Authorization': getToken() }

  next(action)
}
