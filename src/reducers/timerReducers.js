// Types
import { SET_IS_PLAYING, SET_HIDE_TIMER } from '../actions'

const initialState = {
    isPlaying: false,
    hideTimer: false,
}

const timerReducers = (state=initialState, action) => {
    switch(action.type) {
        case SET_IS_PLAYING:
            return {
                ...state,
                isPlaying: action.payload,
            }
        case SET_HIDE_TIMER:
            return {
                ...state,
                hideTimer: action.payload,
            }
        default:
            return state;
    }
}

export default timerReducers