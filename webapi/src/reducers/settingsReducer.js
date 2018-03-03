const settingsReducer = (state = {
    title: 1,
    subtitle: 'lorem'
},
    action) => {
    switch (action.type) {
        case "SET_TITLE":
            state = {
                ...state,
                title: action.payload
            }
            break;
        case "SET_SUBTITLE":
            state = {
                ...state,
                title: action.payload
            }
    }
    return state;
}

export default settingsReducer;