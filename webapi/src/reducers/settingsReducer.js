export const settingsReducer = (state = {
    title: ''
}, action) => {
    switch (action.type) {
        case "GET_TITLE":
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle
            };
            break;
    }
    return state;
};
