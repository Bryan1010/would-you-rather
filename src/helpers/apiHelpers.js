import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from '../_DATA';

export function getData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveQuestionWrapper(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswerWrapper(info) {
  return _saveQuestionAnswer(info);
}