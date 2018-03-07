const articlesReducer = (state = [],
    action) => {
    switch (action.type) {
        case "GET_ARTICLES_FULFILLED":
            state = {
                ...state,
                data: action.payload,
            }
            break;
        default: return state;
    }
    return state;
}

export default articlesReducer;