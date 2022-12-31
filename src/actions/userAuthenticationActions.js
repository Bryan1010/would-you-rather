export const SET_USER_AUTHENTICATION = 'SET_USER_AUTHENTICATION';

export function setAuthUser(id) {
  return {
    type: SET_USER_AUTHENTICATION,
    id
  };
}