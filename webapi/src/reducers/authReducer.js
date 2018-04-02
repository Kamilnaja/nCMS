const authReducer = (state = {
    isAuthenticated: false
}, action) => {
    switch (action.type) {

        case "CREATE_ACCOUNT_SUCCESS": {
            state = {
                ...state,
                statusInfo: 'success'
            }
            break;
        }
        case "SET_CURRENT_USER": {
            state = {
                ...state,
                isAuthenticated: true,
                userName: action.user.username
            }
            break;
        }
        default: return state;
    }
    return state;
}

export default authReducer