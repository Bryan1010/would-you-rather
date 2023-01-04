import { GET_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../actions/userActions';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER_TO_USER:
      const { authedUser, questionID, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionID]: answer
          }
        }
      }
    case ADD_QUESTION_TO_USER:{
      const {id, author} = action;
      console.log(action, id, author.author);
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      }
    }
    default:
      return state;
  }
}