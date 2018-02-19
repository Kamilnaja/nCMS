import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { posts } from './posts';
export default combineReducers({
    items,
    posts,
    itemsHasErrored,
    itemsIsLoading
})