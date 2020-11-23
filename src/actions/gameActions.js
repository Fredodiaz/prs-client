// TYPES
import { SET_PLAYERS_IN_ROOM } from './index'

export const setPlayersInGame = ( players ) => dispatch => {
    dispatch({
        type: SET_PLAYERS_IN_ROOM,
        payload: players
    })
}

