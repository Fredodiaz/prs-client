// Types
import { SET_USER_NAME } from '../actions'

const initialState = {
    name: ''
}

const userReducers = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_NAME:
            console.log("NAME", action.payload)
            return {
                name: action.payload,
                ...state
            }
        default:
            return state;
    }
}

export default userReducers