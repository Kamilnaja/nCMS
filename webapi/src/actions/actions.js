import axios from 'axios';
import { dispatch } from 'redux';

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function getTitle(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((res) => {
                dispatch(itemsIsLoading(false));
                return res;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    }
    // return function (dispatch) {
    //     axios.get('http://localhost:8080/api/settings')
    //         .then((res) => {
    //             var title = res.data[0].title;
    //             var subtitle = res.data[0].subtitle;
    //             dispatch({
    //                 type: "GET_SETTINGS",
    //                 payload: {
    //                     title: title,
    //                     subtitle: subtitle
    //                 }
    //             })
    //         }).catch((err) => {
    //             dispatch({
    //                 type: "FETCH_SETTINGS_ERROR",
    //                 payload: err
    //             })
    //         })
    // }

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