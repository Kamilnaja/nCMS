import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import articles from './articlesReducer';
import auth from './authReducer';
import paginator from './paginatorReducer';
import settings from './settingsReducer';
import user from './usersReducer';

const store = createStore(
    combineReducers({
        paginator,
        settings,
        articles,
        auth,
        user
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;