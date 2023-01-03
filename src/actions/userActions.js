import { saveQuestionAnswerWrapper } from "../helpers/apiHelpers";
import { answerQuestion } from "./questionActions";

export const GET_USERS = 'GET_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function addQuestionToUser(author, id){
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  }
}

function addAnswerToUser(authedUser, questionID, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    questionID,
    answer
  };
}

export function saveAnswerToUser(authedUser, questionID, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authedUser, questionID, answer));
    dispatch(answerQuestion(authedUser, questionID, answer));
    return saveQuestionAnswerWrapper(authedUser, questionID, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}
