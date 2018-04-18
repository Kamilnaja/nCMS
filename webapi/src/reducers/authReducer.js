const authReducer = (state = {
    isAuthenticated: false,
    loginStatus: "waiting"
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
                isAuthenticated: true, // todo - probably not necessary
                userName: action.user.username
            }
            break;
        }

        case "LOGIN_FAILED": {
            state = {
                ...state,
                isAuthenticated: false,
                username: "undefined",
                loginStatus: "error"
            }
            break;
        }

        default: return state;
    }
    return state;
}

export default authReducer