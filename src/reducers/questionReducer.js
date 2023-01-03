import { GET_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questionActions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      const { authedUser, id, answer } = action;

      return {
        ...state,

        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(authedUser)
          }

        }
      }
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question
      }
    default:
      return state;
  }
}