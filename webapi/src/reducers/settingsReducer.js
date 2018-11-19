import ActionTypes from './../utils/ActionTypes';

const settingsReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.GET_SETTINGS_SUCCESS:
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                footer: action.payload.footer
            }
            break;

        case ActionTypes.GET_SETTINGS_ERROR: {
            state = {
                ...state,
                settings_error: true,
                statusInfo: 'error'
            }
            break;
        }

        case ActionTypes.SET_SETTINGS_START: {
            state = {
                ...state,
                statusInfo: 'start'
            }
            break;
        }

        case ActionTypes.SET_SETTINGS_SUCCESS: {
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                footer: action.payload.footer,
                statusInfo: 'success'
            }
            break;
        }
        default: return state;
    }
    return state;
}

export default settingsReducer;