import { getData } from '../helpers/apiHelpers';
import { getQuestions } from './questionActions';
import { getUsers } from './userActions';
import {showLoading, hideLoading} from 'react-redux-loading'
import { setAuthUser } from './userAuthenticationActions';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getData().then(({ users, questions }) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
      dispatch(hideLoading());
    });
  };
}

export function AuthenticateUserSetter(userID) {
  return dispatch => {
    return dispatch(setAuthUser(userID))
  }
}