import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';
import setAuthorizationToken from './../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import {
    SET_CURRENT_USER,
    LOGIN_FAILED,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILED,
    RELOAD_REGISTER_INFO,
} from './../utils/action-types';

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

export function login(data) {
    store.dispatch((dispatch) => {
        axios({
            method: 'post',
            url: `${localUrl}/api/session`,
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
            url: `${localUrl}/api/user`,
            data: {
                username: data.username,
                password: data.password
            }
        })
            .then((res) => {
                if (res.data === 'notUniqueUserName') {
                    dispatch({
                        type: CREATE_ACCOUNT_FAILED,
                        payload: 'notUniqueUserName'
                    })
                } else {
                    dispatch({
                        type: CREATE_ACCOUNT_SUCCESS,
                        payload: data
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: CREATE_ACCOUNT_FAILED,
                    payload: err
                })
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