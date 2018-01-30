import axios from 'axios';
import { dispatch } from 'redux';

export function getTitle() {
    return function (dispatch) {
        axios.get('http://localhost:8080/api/settings')
            .then((res) => {
                var title = res.data[0].title;
                var subtitle = res.data[0].subtitle;
                dispatch({
                    type: "GET_SETTINGS",
                    payload: {
                        title: title,
                        subtitle: subtitle
                    }
                })
            }).catch((err) => {
                dispatch({
                    type: "FETCH_SETTINGS_ERROR",
                    payload: err
                })
            })
    }

}

export function ChangeSettings(data) {
    return function (dispatch) {
        dispatch({
            type: "CHANGE_SETTINGS"
        })
    }
}

export function getPosts() {
    return function (dispatch) {
        dispatch({ type: "FETCH_POSTS_START" });
        axios.get('http://localhost:8080/api/posts')
            .then((res) => {
                dispatch({
                    type: "RECEIVE_POSTS",
                    payload: res
                })
            }).catch((err) => {
                dispatch({
                    type: "FETCH_POSTS_ERROR",
                    payload: err
                })
            })
    }
}