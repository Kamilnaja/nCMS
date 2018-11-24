import axios from "axios";
import store from "../reducers/store";
import ActionTypes from "../utils/ActionTypes";

export function setPaginatorProperties(payload) {
    axios.get("http://localhost:8080/api/articles?page=1&size=10")
        .then((res) => {
            store.dispatch((dispatch) => {
                dispatch({
                    type: ActionTypes.SET_PAGINATION_PROPS,
                    payload: res.data
                })
            })
        })
    return {
        type: ActionTypes.SET_PAGINATION_PROPS,
        payload: payload
    }
}

export function setCurrentPaginationPage(payload) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.SET_CURRENT_PAGINATION_PAGE,
            payload: payload
        })
    })
    return {
        type: ActionTypes.SET_CURRENT_PAGINATION_PAGE,
        payload: payload
    }
}