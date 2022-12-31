import { SET_USER_AUTHENTICATION } from '../actions/userAuthenticationActions';

export default function AuthenticateUser(state = null, action) {
  return action.type === SET_USER_AUTHENTICATION ? action.id : state;

}