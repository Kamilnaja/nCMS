const usersReducer = (state = {
    userList: []
}, action) => {
    switch (action.type) {
        case "GET_USERS_SUCCESS": {
            state = {
                ...state,
                fetching: false,
                userList: action.payload
            }
            break;
        }
        // todo - nex reducers
        default: return state;
    }
    return state;
}

export default usersReducer;