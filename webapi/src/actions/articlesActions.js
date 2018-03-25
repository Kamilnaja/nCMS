import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';

export function getOneArticle(e) {
    store.dispatch((dispatch) => {
        dispatch({
            type: "GET_SINGLE_ARTICLE_START"
        });

        axios.get(`${localUrl}/api/posts/${e.target.getAttribute('data-key')}`)
            .then(
                dispatch({
                    type: "GET_SINGLE_ARTICLE_SUCCESS"
                })
            )
    })
}

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

export function saveEditedArticle(data, editedArticle) {
    store.dispatch((dispatch) => {

        dispatch({
            type: "SENDING_DATA_START" // todo - change this
        })

        axios.put(`${localUrl}/api/posts/${editedArticle}`,
            {
                title: data.articleTitle,
                subtitle: data.articleSubtitle,
                content: data.articleMainContent,
                author: data.articleAuthor
            })
            .then(() => {
                dispatch({
                    type: "ADD_NEW_ARTICLE_SUCCESS",
                    payload: data
                })
            })
    })
}

export function cancelEdit(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: "CANCEL_EDIT"
        })
    })
}

export function editArticle(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: "EDIT_ARTICLE_START",
            payload: data
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

export function AddNewArticle(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: "ADD_ARTICLE_PENDING"
        })
        axios.post(
            `${localUrl}/api/posts`, {
                title: payloadData.articleTitle,
                subtitle: payloadData.articleSubtitle,
                content: payloadData.articleMainContent,
                author: payloadData.articleAuthor
            })
            .then(() => {
                dispatch({
                    type: "ADD_NEW_ARTICLE_SUCCESS",
                    payload: payloadData
                })
            })
    })
}

