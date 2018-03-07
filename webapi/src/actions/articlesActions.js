export function getArticles(data) {
    return {
        type: "GET_ARTICLES",
        payload: data
    }
}