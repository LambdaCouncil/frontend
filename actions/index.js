export const
    SET_USER = 'SET_USER',
    CLEAR_USER = 'CLEAR_USER',
    SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL',
    SET_PRIVATE_CHANNEL = 'SET_PRIVATE_CHANNEL',
    SET_CURRENT_ASSIGNMENT = 'SET_CURRENT_ASSIGNMENT'

export const
    setUser = user => dispatch => dispatch({
        type: SET_USER,
        payload: user
    }),
    clearUser = _ => dispatch => dispatch({
        type: CLEAR_USER
    }),
    setCurrentChannel = channel => dispatch => dispatch({
        type: SET_CURRENT_CHANNEL,
        payload: channel
    }),
    setPrivateChannel = isPrivateChannel => dispatch => dispatch({
        type: SET_PRIVATE_CHANNEL,
        payload: isPrivateChannel
    }),
    setCurrentAssignment = assignment => dispatch => dispatch({
        type: SET_CURRENT_ASSIGNMENT,
        payload: assignment
    })
