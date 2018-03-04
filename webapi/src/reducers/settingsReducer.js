const settingsReducer = (state = {
    title: '',
    subtitle: 'lorem'
},
    action) => {
    switch (action.type) {
        case "SET_TITLE_FULFILLED":
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