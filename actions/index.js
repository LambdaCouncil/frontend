export const
    SET_USER = 'SET_USER',
    CLEAR_USER = 'CLEAR_USER',
    SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL',
    SIGN_UP_DISPLAY_NAME = 'SIGN_UP_DISPLAY_NAME',
    SET_PRIVATE_CHANNEL = 'SET_PRIVATE_CHANNEL'

export const
    setUser = user => dispatch => dispatch({
        type: SET_USER,
        payload: user
    }),
    signUpDisplayName = dn => dispatch => dispatch({
        type: SIGN_UP_DISPLAY_NAME,
        payload: dn
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
    })
