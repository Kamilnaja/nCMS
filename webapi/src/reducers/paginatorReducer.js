import ActionTypes from '../utils/ActionTypes';

const paginatorReducer = (
    state = {
        size: 10,
        currentPaginationPage: 0,
        totalPages: 1
    }, action) => {

    switch (action.type) {
        case ActionTypes.SET_PAGINATION_PROPS: {
            if (action.payload !== undefined) {
                state = {
                    ...state,
                    totalPages: action.payload.totalPages
                };
            }
            break;
        }
        case ActionTypes.SET_CURRENT_PAGINATION_PAGE:
            state = {
                ...state,
                currentPaginationPage: action.payload
            };
            break;
        default: return state;
    }
    return state;
};

export default paginatorReducer;