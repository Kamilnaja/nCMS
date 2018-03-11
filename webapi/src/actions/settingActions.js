import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';

export function setSettings(data) {
    return {
        type: "SET_SETTINGS",
        payload: data
    }
}

export function getSettings() {
    store.dispatch((dispatch) => {
        dispatch({
            type: "GET_SETTINGS_START"
        })
        axios.get(`${localUrl}/api/settings`)
            .then((response) => {
                dispatch({
                    type: "GET_SETTINGS_SUCCESS",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_SETTINGS_ERROR",
                    payload: err
                })
            })
    })
}
