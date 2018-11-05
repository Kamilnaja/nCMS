import axios from 'axios';
import jwtDecode from 'jwt-decode';
import store from './../store';
import { CREATE_ACCOUNT_FAILED, CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS, CREATE_ACCOUNT_SUCCESS, LOGIN_FAILED, RELOAD_REGISTER_INFO, SET_CURRENT_USER } from './../utils/action-types';
import appConfig from './../utils/AppConfig';
import setAuthorizationToken from './../utils/setAuthToken';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function setUser() {
    store.dispatch((dispatch) => {
        setAuthorizationToken(localStorage.jwtToken);
        store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    })
}

export function cleanInfoStrip() {
    store.dispatch((dispatch) => {
        dispatch({
            type: "CLEAN_INFO_STRIP"
        })
    })
}

export function login(data) {
    store.dispatch((dispatch) => {
        axios({
            method: 'post',
            url: `${appConfig.serverUrl}/api/session`,
            data: {
                username: data.username,
                password: data.password
            }
        })
            .then((res) => {
                const token = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwtDecode(token)));
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_FAILED
                })
            })
    })
}

export function SendNewAccountData(data) {
    store.dispatch((dispatch) => {
        axios({
            method: 'post',
            url: `${appConfig.serverUrl}/api/register`,
            data: {
                login: data.login,
                password: data.password,
                email: data.email
            }
        })
            .then((res) => {
                dispatch({
                    type: CREATE_ACCOUNT_SUCCESS,
                    payload: res
                })
            })
            .catch((err) => {
                if (err.response.data.errorKey) {
                    dispatch({
                        type: CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS,
                        payload: err.response.data.errorKey
                    })
                } else {
                    dispatch({
                        type: CREATE_ACCOUNT_FAILED,
                        payload: err
                    })
                }
            })
    })
}

export function logOut() {
    store.dispatch((dispatch) => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        store.dispatch(setCurrentUser({}));
    })
}

export function enableRegisterAnotherUser() {
    store.dispatch((dispatch) => {
        dispatch({
            type: RELOAD_REGISTER_INFO
        })
    })
}