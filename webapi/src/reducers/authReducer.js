import ActionTypes from './../utils/ActionTypes';

const authReducer = (state = {
    isAuthenticated: false,
    loginStatus: "waiting",
    statusInfo: ''
}, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS: {
            state = {
                ...state,
                statusInfo: action.payload
            }
            break;
        }

        case ActionTypes.CREATE_ACCOUNT_FAILED_EMAIL_EXISTS: {
            state = {
                ...state,
                statusInfo: 'emailAlreadyExists'
            }
            break;
        }

        case ActionTypes.CREATE_ACCOUNT_FAILED_SHORT_PASSWORD: {
            state = {
                ...state,
                statusInfo: action.payload
            }
            break;
        }

        case ActionTypes.CREATE_ACCOUNT_FAILED: {
            state = {
                ...state,
                statusInfo: action.payload
            }
            break;
        }

        case ActionTypes.CREATE_ACCOUNT_SUCCESS: {
            state = {
                ...state,
                statusInfo: 'success',
                activation_key: action.payload.data
            }
            break;
        }

        case ActionTypes.SET_CURRENT_USER: {
            state = {
                ...state,
                isAuthenticated: true, // todo - probably not necessary
                userName: action.user.username
            }
            break;
        }

        case ActionTypes.LOGIN_FAILED: {
            state = {
                ...state,
                isAuthenticated: false,
                username: "undefined",
                loginStatus: "error"
            }
            break;
        }

        case ActionTypes.RELOAD_REGISTER_INFO: {
            state = {
                ...state,
                statusInfo: ""
            }
            break;
        }

        case ActionTypes.CLEAN_INFO_STRIP: {
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