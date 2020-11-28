// TYPES
import { SET_CURRENT_CHOICE, SET_CURRENT_ROOM, SET_IS_IN_GAME, SET_JOINED_GAME, SET_USER_NAME, SET_USER_OPPONENT } from './index'

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

export const setPlayerOpponent = ( opponent ) => dispatch => {
    dispatch({
        type: SET_USER_OPPONENT,
        payload: opponent
    })
}

export const setIsUserInGame = (isUserInGame) => dispatch => {
    dispatch({
        type: SET_IS_IN_GAME,
        payload: isUserInGame
    })
}

export const setCurrentChoice = (choice) => dispatch => {
    dispatch({
        type: SET_CURRENT_CHOICE,
        payload: choice
    })
}