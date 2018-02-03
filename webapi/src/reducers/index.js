import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { posts, postsHasErrored, postsIsLoading } from './posts';
export default combineReducers({
    items,
    posts,
    itemsHasErrored,
    itemsIsLoading
})