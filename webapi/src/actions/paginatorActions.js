import Axios from "axios";
import store from "../reducers/store";
import ActionTypes from "../utils/ActionTypes";

export const setCurrentPaginationPage = (payloadData) => ({
    type: ActionTypes.SET_CURRENT_PAGINATION_PAGE,
    payload: payloadData
})

export function setPaginationSize(payloadData) {
    Axios.get()
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.SET_PAGINATION_SIZE,
            payload: payloadData
        })
    })
}