export const settingsReducer = (state = {
    title: 'Lorem ipsum'
}, action) => {
    switch (action.type) {
        case "SET_TITLE":
            state = {
                ...state,
                title: action.payload
            };
            break;
    }
    return state;
};
