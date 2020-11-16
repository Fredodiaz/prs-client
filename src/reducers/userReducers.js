// Types
import { SET_CURRENT_ROOM, SET_JOINED_GAME, SET_USER_NAME } from '../actions'

const initialState = {
    currentRoom: '',
    hasJoinedGame: false,
    name: '',
}

const userReducers = (state=initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_ROOM:
            console.log('SET_CURRENT_ROOM', action.payload)
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
            console.log('SET_USER_NAME', action.payload)
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}

export default userReducers