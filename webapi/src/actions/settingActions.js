export function setTitle(title) {
    return {
        type: "SET_TITLE",
        payload: title
    }
};

export function setSettings(data) {
    return {
        type: "SET_SETTINGS",
        payload: data
    }
}