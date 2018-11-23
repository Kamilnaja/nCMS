import axios from 'axios';
import store from '../reducers/store';
import ActionTypes from './../utils/ActionTypes';
import appConfig from './../utils/AppConfig';

function articleDeleted(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.DELETE_ARTICLE_SUCCESS,
            payload: data
        })
    })
}

function articleEdited(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.EDIT_ARTICLE_SUCCESS,
            payload: data
        })
    })
}

export function getArticles(payload) {

    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.GET_ARTICLES_START,
            payload: payload
        })

        axios.get(`${appConfig.serverUrl}/api/articles?page=${payload.page}&size=${payload.size}`)
            .then((response) => {
                dispatch({
                    type: ActionTypes.GET_ARTICLES_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.GET_ARTICLES_ERROR,
                    payload: err
                })
            })
    })
}

export function saveEditedArticle(data, editedArticle) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.EDIT_ARTICLE_START
        })

        axios.put(`${appConfig.serverUrl}/api/articles/${editedArticle}`,
            {
                title: data.articleTitle,
                subtitle: data.articleSubtitle,
                content: data.articleMainContent,
                author: data.articleAuthor
            })
            .then(
                (res) => {
                    articleEdited(res.data)
                }
            )
    })
}

export function cancelEdit() {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.EDIT_ARTICLE_CANCEL
        })
    })
}

export function showEditionForm(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.SHOW_EDITION_FORM,
            payload: data
        })
    })
}

export function deleteArticle(data) {
    store.dispatch((dispatch) => {
        axios({
            method: 'delete',
            url: `${appConfig.serverUrl}/api/articles/${data}`
        })
            .then(
                articleDeleted(data)
            )
            .catch((err) => {
                if (err) {
                    dispatch({
                        type: ActionTypes.DELETE_ARTICLE_FAILED,
                        payload: data
                    })
                }
            })
    })
}

export function AddNewArticle(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ActionTypes.ADD_ARTICLE_PENDING
        })
        axios.post(
            `${appConfig.serverUrl}/api/articles`, {
                title: payloadData.articleTitle,
                subtitle: payloadData.articleSubtitle,
                content: payloadData.articleMainContent,
                author: payloadData.articleAuthor
            })
            .then(() => {
                dispatch({
                    type: ActionTypes.ADD_NEW_ARTICLE_SUCCESS,
                    payload: payloadData
                })
            })
    })
}