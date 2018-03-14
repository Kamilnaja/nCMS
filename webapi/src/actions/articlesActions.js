import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';
import AddArticles from './../components/adminPanel/AddArticles/AddArticles';

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
    return {
        type: "DELETE_ARTICLE",
        payload: data
    }
}

export function AddNewArticle(data) {
    return {

    }
}