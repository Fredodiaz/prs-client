// Types
import { SET_BOTH_PLAYER_CHOICE, SET_CURRENT_CHOICE, SET_CURRENT_ROOM, SET_HAS_LOST, SET_HAS_WON, SET_IS_IN_GAME, SET_JOINED_GAME, SET_SCORE, SET_USER_NAME, SET_USER_OPPONENT } from '../actions'

const initialState = {
    currentRoom: '',
    hasJoinedGame: false,
    isInGame: false,
    name: '',
    opponent: {},
    currentChoice: '',
    score: {user: 0, opponent: 0, status: 'not started'},
    playerMoves: {ofUser: 'rock', ofOpp: 'rock'},
    hasLost: false,
    hasWon: false,
}

const userReducers = (state=initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.payload,
            }
        case SET_JOINED_GAME:
            return {
                ...state,
                hasJoinedGame: action.payload
            }
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case SET_USER_OPPONENT:
            return {
                ...state,
                opponent: action.payload
            }
        case SET_IS_IN_GAME:
            return {
                ...state,
                isInGame: action.payload
            }
        case SET_CURRENT_CHOICE:
            return {
                ...state,
                currentChoice: action.payload
            }
        case SET_SCORE:
            return {
                ...state,
                score: action.payload
            }
        case SET_BOTH_PLAYER_CHOICE:
            return {
                ...state,
                playerMoves: action.payload
            }
        case SET_HAS_LOST:
            return {
                ...state,
                hasLost: action.payload
            }
        case SET_HAS_WON:
            return {
                ...state,
                hasWon: action.payload
            }
        default:
            return state;
    }
}

export default userReducers