// Native Imports
import { combineReducers } from 'redux';

// Reducers
import user from './userReducers'
import game from './gameReducers'
import timer from './timerReducers'

export default combineReducers({
    game,
    user,
    timer,
});