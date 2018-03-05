const articlesReducer = (state = {},
    action) => {
    switch (action.type) {

        case "SET_ARTICLES_FULFILLED":
            state = {
                ...state,
                articles: action.payload,
                loadStatus: 'success'
            }
            break;
        default: return state;
    }
    return state;
}

export default articlesReducer;