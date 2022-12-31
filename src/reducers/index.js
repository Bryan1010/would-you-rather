import { combineReducers } from 'redux';
import AuthenticateUser from './userAuthReducer';
import questions from './questionReducer';
import users from './usersReducer';

export default combineReducers({
    AuthenticateUser,
    questions,
    users
});