export function getArticles(data) {
    return {
        type: "GET_ARTICLES",
        payload: data
    }
}

export function deleteArticle(data) {
    return {
        type: "DELETE_ARTICLE",
        payload: data
    }
}