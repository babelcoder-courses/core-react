import { createSelector } from 'reselect'

const usersByIds = ({ users }, { userIds }) =>
  userIds ?
    Object
      .entries(users)
      .filter(([k, v]) => userIds.includes(+k))
      .reduce((result, [k, v]) => ({ ...result, [k]: v }), {}) : {}

export function getUsers(state) {
  return state.users
}

export const getUsersByIds = createSelector(
  usersByIds,
  users => users
)
