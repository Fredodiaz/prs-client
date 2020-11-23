// Types
import { SET_PLAYERS_IN_ROOM } from '../actions'

const initialState = {
    players: []
}

const gameReducers = (state=initialState, action) => {
    switch(action.type) {
        case SET_PLAYERS_IN_ROOM:
            return {
                ...state,
                players: action.payload,
            }
        default:
            return state;
    }
}

export default gameReducers