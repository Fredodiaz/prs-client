// TYPES
import { SET_IS_PLAYING, SET_HIDE_TIMER } from './index'

export const setIsPlaying = ( isPlaying ) => dispatch => {
    dispatch({
        type: SET_IS_PLAYING,
        payload: isPlaying
    })
}

export const setHideTimer = ( hideTimer ) => dispatch => {
    dispatch({
        type: SET_HIDE_TIMER,
        payload: hideTimer
    })
}