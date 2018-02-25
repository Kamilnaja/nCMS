import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './itemsReducer';
import { articles } from './postsReducer';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    articles
})