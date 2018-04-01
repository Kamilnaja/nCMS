import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';

export function SendLoginData(data) {
    store.dispatch((dispatch) => {

        axios({
            method: 'post',
            url: `${localUrl}/api/session`,
            data: {
                username: data.username,
                password: data.password
            }
        })
            .then(() => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "LOGIN_FAILED"
                })
            })
    })
}

export function SendNewAccountData(data) {
    store.dispatch((dispatch) => {
        axios({
            method: 'post',
            url: `${localUrl}/api/user`,
            data: {
                username: data.username,
                password: data.password
            }
        })
            .then(() => {
                dispatch({
                    type: "CREATE_ACCOUNT_SUCCESS",
                    payload: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "CREATE_ACCOUNT_FAILED",
                    payload: err
                })
            })
    })
}