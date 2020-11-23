// Native Imports
import { combineReducers } from 'redux';

// Reducers
import user from './userReducers'
import game from './gameReducers'

export default combineReducers({
    game,
    user,
});