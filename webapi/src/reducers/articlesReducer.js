const articlesReducer = (state = [],
    action) => {

    function findElementAndReturnArrayWithoutHim() {
        const indexOfDeletedElement = state.data.findIndex(x => x._id === action.payload);
        state.data.splice(indexOfDeletedElement, 1);
    }

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
                error: action.payload
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
            findElementAndReturnArrayWithoutHim();
            state = {
                ...state,
                statusInfo: 'Skasowano item o id ' + action.payload,
                data: state.data
            }
            break;
        }

        case "DELETE_ARTICLE_FAILED": {
            state = {
                ...state,
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
        }

        case "EDIT_ARTICLE_SUCCESS": {
            state = {
                ...state,
                statusInfo: 'success',
                isOnEdition: true
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