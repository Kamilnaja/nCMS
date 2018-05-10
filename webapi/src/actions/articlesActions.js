import axios from 'axios';
import store from './../store';
import { localUrl } from './../utils/AppConfig';
import {
    DELETE_ARTICLE_FAILED,
    DELETE_ARTICLE_SUCCESS,
    EDIT_ARTICLE_SUCCESS,
    EDIT_ARTICLE_CANCEL,
    GET_ARTICLES_ERROR,
    GET_ARTICLES_START,
    GET_ARTICLES_SUCCESS,
    EDIT_ARTICLE_START,
    SHOW_EDITION_FORM,
    ADD_ARTICLE_PENDING,
    ADD_NEW_ARTICLE_SUCCESS
} from './../utils/action-types';

function articleDeleted(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: DELETE_ARTICLE_SUCCESS,
            payload: data
        })
    })
}

function articleEdited(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: EDIT_ARTICLE_SUCCESS,
            payload: data
        })
    })
}


export function getArticles() {
    store.dispatch((dispatch) => {
        dispatch({
            type: GET_ARTICLES_START
        })

        axios.get(`${localUrl}/api/posts`)
            .then((response) => {
                dispatch({
                    type: GET_ARTICLES_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_ARTICLES_ERROR,
                    payload: err
                })
            })
    })
}

export function saveEditedArticle(data, editedArticle) {
    store.dispatch((dispatch) => {
        dispatch({
            type: EDIT_ARTICLE_START
        })

        axios.put(`${localUrl}/api/posts/${editedArticle}`,
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
            type: EDIT_ARTICLE_CANCEL
        })
    })
}

export function showEditionForm(data) {
    store.dispatch((dispatch) => {
        dispatch({
            type: SHOW_EDITION_FORM,
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
            .then(
                articleDeleted(data)
            )
            .catch((err) => {
                if (err) {
                    dispatch({
                        type: DELETE_ARTICLE_FAILED,
                        payload: data
                    })
                }
            })
    })
}

export function AddNewArticle(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: ADD_ARTICLE_PENDING
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
                    type: ADD_NEW_ARTICLE_SUCCESS,
                    payload: payloadData
                })
            })
    })
}