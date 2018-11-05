import axios from 'axios';
import store from './../store';
import ActionTypes from './../utils/ActionTypes';
import appConfig from './../utils/AppConfig';

export function setSettings(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.SET_SETTINGS_START
        })

        axios.put(`${appConfig.serverUrl}/api/pagesettings`, {
            title: payloadData.title,
            subtitle: payloadData.subtitle,
            footer: payloadData.footer
        })
            .then(() => {
                dispatch({
                    type: ActionTypes.SET_SETTINGS_SUCCESS,
                    payload: payloadData
                })
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.SET_SETTINGS_ERROR,
                    payload: err
                })
            })
    })

    return {
        type: ActionTypes.SET_SETTINGS,
        payload: payloadData
    }
}

export function getSettings() {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.GET_SETTINGS_START
        })
        axios.get(`${appConfig.serverUrl}/api/pagesettings`)
            .then((response) => {
                dispatch({
                    type: ActionTypes.GET_SETTINGS_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.GET_SETTINGS_ERROR,
                    payload: err
                })
            })
    })
}

export function setCurrentPaginationPage(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.SET_CURRENT_PAGINATION_PAGE,
            payload: payloadData
        })
    })
}

export function setPaginationSize(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.SET_PAGINATION_SIZE,
            payload: payloadData
        })
    })
}