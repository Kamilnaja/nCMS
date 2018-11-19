import ActionTypes from "../utils/ActionTypes";

const paginatorReducer = (
    state = {
        size: 10,
        currentPaginationPage: 0,
        totalPages: undefined
    }, action) => {

    switch (action.type) {
        case ActionTypes.SET_PAGINATION_PROPS: {
            if (action.payload !== undefined) {

                state = {
                    ...state,
                    totalPages: action.payload.totalPages // todo - problem 
                }
            }
            break;
        }
        default: return state;
    }
    return state;
}

export default paginatorReducer;