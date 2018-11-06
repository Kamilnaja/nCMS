import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import settings from './settingsReducer';
import articles from './articlesReducer';
import auth from './authReducer';
import user from './usersReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const store = createStore(
    combineReducers({
        settings,
        articles,
        auth,
        user
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;