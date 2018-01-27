export const settingsReducer = (state = {
    title: 'Lorem ipsum'
}, action) => {
    switch (action.type) {
        case "GET_TITLE":
            state = {
                ...state,
                title: action.payload
            };
            break;
    }
    return state;
};
