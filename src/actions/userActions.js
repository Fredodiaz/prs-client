// TYPES
import { SET_BOTH_PLAYER_CHOICE, SET_CURRENT_CHOICE, SET_CURRENT_ROOM, SET_HAS_LOST, SET_HAS_WON, SET_IS_IN_GAME, SET_JOINED_GAME, SET_SCORE, SET_USER_NAME, SET_USER_OPPONENT } from './index'

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

export const setScore = (userPoints, oppPoints, status) => dispatch => {
    let scoreObj = {
        user: userPoints,
        opponent: oppPoints,
        status
    }

    dispatch({
        type: SET_SCORE,
        payload: scoreObj
    })
}

export const setBothPlayersChoice = (userChoice, opponentChoice) => dispatch => {
    let choicesObj = {
        ofUser: userChoice,
        ofOpp: opponentChoice
    }

    dispatch({
        type: SET_BOTH_PLAYER_CHOICE,
        payload: choicesObj
    })
}

export const setHasLost = (hasLost) => dispatch => {
    dispatch({
        type: SET_HAS_LOST,
        payload: hasLost
    })
}

export const setHasWon = (hasWon) => dispatch => {
    dispatch({
        type: SET_HAS_WON,
        payload: hasWon
    })
}