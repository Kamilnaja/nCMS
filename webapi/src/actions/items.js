export const ADD_ARTICLE = "ADD_ARTICLE";

export function itemsHasErrored(bool) {
    return {
        type: 'ITEM_HAS_ERRORED',
        hasErrored: bool
    }
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    }
}

export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        article
    }
}

export function saveArticle(data) {
    return dispatch => {
        return fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(addArticle(data.article)));
    }
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.respone = response;
        throw error;
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)))
    };
}