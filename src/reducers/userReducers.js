// Types
import { SET_CURRENT_ROOM, SET_IS_IN_GAME, SET_JOINED_GAME, SET_USER_NAME, SET_USER_OPPONENT } from '../actions'

const initialState = {
    currentRoom: '',
    hasJoinedGame: false,
    isInGame: false,
    name: '',
    opponent: {},
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
        default:
            return state;
    }
}

export default userReducers