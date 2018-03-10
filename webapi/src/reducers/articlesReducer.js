import axios from 'axios';

const articlesReducer = (state = [],
    action) => {
    switch (action.type) {
        case "GET_ARTICLES_FULFILLED":
            state = {
                ...state,
                data: action.payload,
            }
            break;

        case "DELETE_ARTICLE":
            axios({
                method: 'delete',
                url: `http://localhost:8080/api/posts/${action.payload}`
            })
                .then(
                    state = {
                        ...state,
                        info: 'Skasowano item o id ' + action.payload
                    }
                )
                .catch(
                    state = {
                        ...state,
                        error: 'Nie udało się skasować'
                    }
                )


        default: return state;
    }
    return state;
}

export default articlesReducer;