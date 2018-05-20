import { combineReducers } from 'redux';
import users from './users';
import projects from './projects';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    users,
    projects,
    pender: penderReducer
});