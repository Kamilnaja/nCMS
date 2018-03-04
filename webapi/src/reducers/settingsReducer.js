const settingsReducer = (state = {
    title: '',
    subtitle: 'lorem'
},
    action) => {
    switch (action.type) {

        case "SET_SETTINGS_FULFILLED":
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle
            }
    }
    return state;
}

export default settingsReducer;