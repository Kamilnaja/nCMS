const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    title: '',
    subtitle: ''
}
export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SETTINGS": {
            return {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle
            }
            break;
        }

        case "FETCH_POSTS_START": {
            return {
                ...state,
                fetching: true
            }
            break;
        }

        case "FETCH_POSTS_ERROR": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }

        case "RECEIVE_POSTS": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload
            }
            break;
        }
    }
    return state;
};
