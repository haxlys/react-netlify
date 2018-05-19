import { combineReducers } from 'redux';
import users from './users';
import lambda from './lambda';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    users,
    lambda,
    pender: penderReducer
});