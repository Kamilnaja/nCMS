import axios from 'axios';
import store from '../reducers/store';
import ActionTypes from './../utils/ActionTypes';
import appConfig from './../utils/AppConfig';

export function getUsers() {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.GET_USERS_START
        })

        axios.get(`${appConfig.serverUrl}/api/users`)
            .then((response) => {
                dispatch({
                    type: ActionTypes.GET_USERS_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.GET_USERS_ERROR,
                    payload: err
                })
            })
    })
}
