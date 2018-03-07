const settingsReducer = (state = [],
    action) => {
    switch (action.type) {

        case "GET_SETTINGS_FULFILLED":
            state = {
                ...state,
                title: action.payload[0].title,
                subtitle: action.payload[0].subtitle,
                footer: action.payload[0].footer
            }
            break;

        case "SET_SETTINGS":
            state = {
                ...state,
                title: 'lorem',
                subtitle: 'ipsum',
                footer: 'lorem'
            }

        default: return state;
    }
    return state;
}

export default settingsReducer;