export const settingsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_SETTINGS":
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle
            };
            break;
    }
    return state;
};
