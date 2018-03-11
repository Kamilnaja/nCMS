import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';

export function setSettings(payloadData) {
    store.dispatch((dispatch) => {

        dispatch({
            type: "SET_SETTINGS_START"
        })

        axios.put(`${localUrl}/api/settings`, {
            title: payloadData.title,
            subtitle: payloadData.subtitle,
            footer: payloadData.footer
        })
            .then(() => {
                dispatch({
                    type: "SET_SETTINGS_SUCCESS",
                    payload: payloadData
                })
            })
            .catch((err) => {
                dispatch({
                    type: "SET_SETTINGS_ERROR",
                    payload: err
                })
            })
    })

    return {
        type: "SET_SETTINGS",
        payload: payloadData
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
