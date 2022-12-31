import { getData } from '../helpers/apiHelpers';
import { getQuestions } from './questionActions';
import { getUsers } from './userActions';

export function handleInitialData() {
  return dispatch => {
    return getData().then(({ users, questions }) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
    });
  };
}