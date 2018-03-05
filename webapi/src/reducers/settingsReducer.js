const settingsReducer = (state = {},
    action) => {
    switch (action.type) {

        case "SET_SETTINGS_FULFILLED":
            state = {
                ...state,
                title: action.payload[0].title,
                subtitle: action.payload[0].subtitle,
                footer: action.payload[0].footer
            }
            break;
        default: return state;
    }
    return state;
}

export default settingsReducer;