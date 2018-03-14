import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';

export function getArticles() {

    store.dispatch((dispatch) => {

        dispatch({
            type: "GET_ARTICLES_START"
        })

        axios.get(`${localUrl}/api/posts`)
            .then((response) => {
                dispatch({
                    type: "GET_ARTICLES_SUCCESS",
                    payload: response.data
                })
            })

            .catch((err) => {
                dispatch({
                    type: "GET_ARTICLES_ERROR",
                    payload: err
                })
            })
    })
}
export function deleteArticle(data) {

    store.dispatch((dispatch) => {
        axios({
            method: 'delete',
            url: `${localUrl}/api/posts/${data}`
        })
            .then(() =>
                dispatch({
                    type: "DELETE_ARTICLE_SUCCESS",
                    payload: data
                })
            )
            .catch((err) => {
                if (err) {
                    dispatch({
                        type: "DELETE_ARTICLE_FAILED",
                        payload: data
                    })
                }
            })
    })

}

export function AddNewArticle(data) {

    return {
        type: "ADD_NEW_ARTICLE",
        payload: data
    }
}