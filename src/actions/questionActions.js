import { saveQuestionWrapper } from "../helpers/apiHelpers";
import { addQuestionToUser } from "./userActions";
import {showLoading, hideLoading} from 'react-redux-loading'


export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleSaveQuestion(optionOne, optionTwo, author) {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestionWrapper(
      {
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author
      }).then(
        question => {
          dispatch(addQuestion(question));
          dispatch(addQuestionToUser(question.author, question.id));
          dispatch(hideLoading());
        }
      
      );
  };
}

export function answerQuestion(authedUser, id, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    id,
    answer
  }
}