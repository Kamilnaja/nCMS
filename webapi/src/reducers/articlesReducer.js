const articlesReducer = (state = [],
    action) => {

    switch (action.type) {
        case "GET_ARTICLES_START": {
            state = {
                ...state,
                fetching: true
            }
            break;
        }

        case "GET_ARTICLES_ERROR": {
            state = {
                ...state,
                fetching: false,
                error: action.payload,
                statusInfo: 'error'
            }
            break;
        }

        case "GET_ARTICLES_SUCCESS": {
            state = {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
            break;
        }

        case "DELETE_ARTICLE_SUCCESS": {
            state = {
                ...state,
                statusInfo: 'success',
                data: state.data.filter(item => item._id !== action.payload)
            }
            break;
        }

        case "DELETE_ARTICLE_FAILED": {
            state = {
                ...state,
                statusInfo: 'error'
            }
            break
        }

        case "ADD_NEW_ARTICLE_SUCCESS": {
            state = {
                ...state,
                statusInfo: 'success',
                isOnEdition: false
            }
            break;
        }

        case "EDIT_ARTICLE_START": {
            state = {
                ...state,
                statusInfo: 'inprogress',
                isOnEdition: true
            }
            break
        }

        case "EDIT_ARTICLE_SUCCESS": {
            state = {
                ...state,
                statusInfo: 'success',
                isOnEdition: false,
                data: action.payload
            }
            break;
        }

        case "EDIT_ARTICLE_CANCEL": {
            state = {
                ...state,
                isOnEdition: false
            }
            break;
        }

        case "ADD_ARTICLE_PENDING": {
            state = {
                ...state,
                statusInfo: 'pending'
            }
            break;
        }

        case "SHOW_EDITION_FORM": {
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