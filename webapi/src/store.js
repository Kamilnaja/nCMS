import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import settings from './reducers/settingsReducer';

let store = createStore(
    combineReducers(
        { settings }),
    {},
    applyMiddleware(createLogger())
);

export default store;