const articlesReducer = (state = [],
    action) => {
    switch (action.type) {

        case "SET_ARTICLES_FULFILLED":
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