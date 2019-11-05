import { CLEAR_USER, SET_USER, SET_CURRENT_CHANNEL, SIGN_UP_DISPLAY_NAME, SET_CURRENT_ASSIGNMENT } from '../actions'

const initialUserState = {
    currentUser: undefined,
    isLoading: true,
    channels: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                currentUser: state.displayName ? {
                    ...action.payload,
                    displayName: state.displayName
                } : action.payload,
                isLoading: false
            }
        case CLEAR_USER:
            return {
                ...state,
                isLoading: false
            }
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            }
        case SET_CURRENT_ASSIGNMENT:
            return {
                ...state,
                currentAssignment: action.payload
            }
        default:
            return state
    }
}
