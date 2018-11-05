import ActionTypes from './../utils/ActionTypes';

const settingsReducer = (

    state = {
        paginationSize: 10,
        currentPaginationPage: 0
    },
    action) => {
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

        case ActionTypes.SET_CURRENT_PAGINATION_PAGE: {
            state = {
                ...state,
                currentPaginationPage: action.payload
            }
            break;
        }

        case ActionTypes.SET_PAGINATION_SIZE: {
            state = {
                ...state,
                paginationSize: action.payload
            }
            break;
        }

        default: return state;
    }
    return state;
}

export default settingsReducer;