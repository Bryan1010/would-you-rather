import { combineReducers } from 'redux';
import AuthenticateUser from './userAuthReducer';
import questions from './questionReducer';
import users from './usersReducer';
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    AuthenticateUser,
    questions,
    users,
    loadingBar: loadingBarReducer
});