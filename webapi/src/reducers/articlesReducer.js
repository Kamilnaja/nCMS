import ActionTypes from './../utils/ActionTypes';

const articlesReducer = (state = [],
    action) => {

    switch (action.type) {
        case ActionTypes.GET_ARTICLES_START: {
            state = {
                ...state,
                fetching: true
            }
            break;
        }

        case ActionTypes.GET_ARTICLES_ERROR: {
            state = {
                ...state,
                fetching: false,
                error: action.payload,
                statusInfo: 'error'
            }
            break;
        }

        case ActionTypes.GET_ARTICLES_SUCCESS: {
            state = {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
            break;
        }

        case ActionTypes.DELETE_ARTICLE_SUCCESS: {
            state = {
                ...state,
                statusInfo: 'deleteSuccess',
                data: state.data.filter(item => item._id !== action.payload)
            }
            break;
        }

        case ActionTypes.DELETE_ARTICLE_FAILED: {
            state = {
                ...state,
                statusInfo: 'error'
            }
            break
        }

        case ActionTypes.ADD_NEW_ARTICLE_SUCCESS: {
            state = {
                ...state,
                statusInfo: 'success',
                isOnEdition: false
            }
            break;
        }

        case ActionTypes.EDIT_ARTICLE_START: {
            state = {
                ...state,
                statusInfo: 'inprogress',
                isOnEdition: true
            }
            break
        }

        case ActionTypes.EDIT_ARTICLE_SUCCESS: {
            state = {
                ...state,
                statusInfo: 'success',
                isOnEdition: false,
                data: action.payload
            }
            break;
        }

        case ActionTypes.EDIT_ARTICLE_CANCEL: {
            state = {
                ...state,
                isOnEdition: false
            }
            break;
        }

        case ActionTypes.ADD_ARTICLE_PENDING: {
            state = {
                ...state,
                statusInfo: 'pending'
            }
            break;
        }

        case ActionTypes.SHOW_EDITION_FORM: {
            state = {
                ...state,
                isOnEdition: true,
                articleEdited: action.payload
            }
            break;
        }

        default: return state;
    }
    return state;
}

export default articlesReducer;