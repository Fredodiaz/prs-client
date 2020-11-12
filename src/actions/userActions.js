// TYPES
import { SET_USER_NAME } from './index'

export const setUserName = (username) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: username
    })
}