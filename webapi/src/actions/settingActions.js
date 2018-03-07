export function setSettings(data) {
    return {
        type: "SET_SETTINGS",
        payload: data
    }
}

export function getSettings(data) {
    return {
        type: "GET_SETTINGS",
        payload: data
    }
}
