import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { CREATE_ACCOUNT_FAILED, CREATE_ACCOUNT_FAILED_SHORT_PASSWORD, CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS, CREATE_ACCOUNT_SUCCESS, LOGIN_FAILED, RELOAD_REGISTER_INFO, SET_CURRENT_USER } from '../utils/ActionTypes';
import store from './../store';
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
                if (typeof err.response.data.fieldErrors !== 'undefined' && err.response.data.fieldErrors[0].message === "Size") {
                    dispatch({
                        type: CREATE_ACCOUNT_FAILED_SHORT_PASSWORD,
                        payload: "shortPassword"
                    })
                } else if (typeof err.response.data.message !== 'undefined' && err.response.data.message === "error.userexists") {
                    dispatch({
                        type: CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS,
                        payload: "userAlreadyExists"
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