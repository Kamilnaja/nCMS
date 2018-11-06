import axios from 'axios';
import jwtDecode from 'jwt-decode';
import store from './../store';
import ActionTypes from './../utils/ActionTypes';
import appConfig from './../utils/AppConfig';
import setAuthorizationToken from './../utils/setAuthToken';

export function setCurrentUser(user) {
    return {
        type: ActionTypes.SET_CURRENT_USER,
        user
    }
}

export function setUser() {
    store.dispatch((dispatch) => {
        setAuthorizationToken(localStorage.jwtToken);
        store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    })
}

export function login(data) {
    store.dispatch((dispatch) => {
        axios({
            method: 'post',
            url: `${appConfig.serverUrl}/api/authenticate`,
            data: {
                username: data.username,
                password: data.password
            }
        })
            .then((res) => {
                const token = res.data.id_token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwtDecode(token)));
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.LOGIN_FAILED
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
                    type: ActionTypes.CREATE_ACCOUNT_SUCCESS,
                    payload: res
                })
            })
            .catch((err) => {
                if (typeof err.response.data.fieldErrors !== 'undefined' && err.response.data.fieldErrors[0].message === "Size") {
                    dispatch({
                        type: ActionTypes.CREATE_ACCOUNT_FAILED_SHORT_PASSWORD,
                        payload: "tooShortPassword"
                    })
                } else if (typeof err.response.data.message !== 'undefined' && err.response.data.message === "error.userexists") {
                    dispatch({
                        type: ActionTypes.CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS,
                        payload: "userAlreadyExists"
                    })
                }
                else if (err.response.data.message !== 'undefined' && err.response.data.message === "error.emailexists") {
                    dispatch({
                        type: ActionTypes.CREATE_ACCOUNT_FAILED_EMAIL_EXISTS,
                        payload: "emailAlreadyExists"
                    })
                }
                else {
                    dispatch({
                        type: ActionTypes.CREATE_ACCOUNT_FAILED,
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
            type: ActionTypes.RELOAD_REGISTER_INFO
        })
    })
}