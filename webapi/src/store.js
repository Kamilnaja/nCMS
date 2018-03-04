import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import settings from './reducers/settingsReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

let store = createStore(
    combineReducers(
        { settings }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;