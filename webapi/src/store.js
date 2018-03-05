import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import settings from './reducers/settingsReducer';
import articles from './reducers/articlesReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

let store = createStore(
    combineReducers(
        { settings, articles }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;