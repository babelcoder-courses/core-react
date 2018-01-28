export const CALL_API = Symbol('CALL_API')

function getAction(type, action, state, res) {
  return new Promise(resolve => {
    if(typeof type === 'object') {
      return resolve({ type: type.type, payload: type.payload(action, state, res)})
    }

    if(!res) return resolve({ type })

    res.json().then(payload => resolve({ type, payload }))
  })
}

export default ({ getState }) => next => action => {
  if(typeof action[CALL_API] !== 'object') return next(action)

  const { endpoint, method = 'GET', headers, body, types } = action[CALL_API]
  const [request, success] = types
  const state = getState()

  getAction(request, action, state).then(action => next(action))

  fetch(endpoint, { method, headers, body })
    .then(res => getAction(success, action, state, res))
    .then(action => next(action))
}
