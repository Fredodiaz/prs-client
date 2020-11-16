// TYPES
import { SET_CURRENT_ROOM, SET_JOINED_GAME, SET_USER_NAME } from './index'

/* Sets Room User Joined */
export const setCurrentRoom = (roomName) => dispatch => {
    dispatch({
        type: SET_CURRENT_ROOM,
        payload: roomName
    })
}

/* Sets Room User Joined */
export const setJoinedGame = (hasJoinedLobby) => dispatch => {
    dispatch({
        type: SET_JOINED_GAME,
        payload: hasJoinedLobby
    })
}

export const setUserName = (username) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: username
    })
}

