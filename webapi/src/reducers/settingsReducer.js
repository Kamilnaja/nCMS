import {
    SET_SETTINGS_START,
    SET_SETTINGS_SUCCESS,
    GET_SETTINGS_ERROR,
    GET_SETTINGS_SUCCESS,
    SET_CURRENT_PAGINATION_PAGE,
    SET_PAGINATION_SIZE

} from './../utils/action-types';

const settingsReducer = (

    state = {
        paginationSize: 10,
        currentPaginationPage: 0
    },
    action) => {
    switch (action.type) {
        case GET_SETTINGS_SUCCESS:
            state = {
                ...state,
                title: action.payload[0].title,
                subtitle: action.payload[0].subtitle,
                footer: action.payload[0].footer
            }
            break;

        case GET_SETTINGS_ERROR: {
            state = {
                ...state,
                settings_error: true,
                statusInfo: 'error'
            }
            break;
        }


        case SET_SETTINGS_START: {
            state = {
                ...state,
                statusInfo: 'start'
            }
            break;
        }

        case SET_SETTINGS_SUCCESS: {
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                footer: action.payload.footer,
                statusInfo: 'success'
            }
            break;
        }

        case SET_CURRENT_PAGINATION_PAGE: {
            state = {
                ...state,
                currentPaginationPage: action.payload
            }
            break;
        }

        case SET_PAGINATION_SIZE: {
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