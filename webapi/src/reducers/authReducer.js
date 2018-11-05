const authReducer = (state = {
    isAuthenticated: false,
    loginStatus: "waiting",
    statusInfo: ''
}, action) => {
    switch (action.type) {
        case "CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS": {
            state = {
                ...state,
                statusInfo: action.payload
            }
            break;
        }

        case "CREATE_ACCOUNT_FAILED_EMAIL_EXISTS": {
            state = {
                ...state,
                statusInfo: 'emailAlreadyExists'
            }
            break;
        }

        case "CREATE_ACCOUNT_FAILED_SHORT_PASSWORD": {
            state = {
                ...state,
                statusInfo: action.payload
            }
            break;
        }

        case "CREATE_ACCOUNT_FAILED": {
            state = {
                ...state,
                statusInfo: action.payload
            }
            break;
        }

        case "CREATE_ACCOUNT_SUCCESS": {
            state = {
                ...state,
                statusInfo: 'success',
                activation_key: action.payload.data
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

        case "RELOAD_REGISTER_INFO": {
            state = {
                ...state,
                statusInfo: ""
            }
            break;
        }

        case "CLEAN_INFO_STRIP": {
            state = {
                ...state,
                loginStatus: ""
            }
            break;
        }
        default: return state;
    }
    return state;
}

export default authReducer