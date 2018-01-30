import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { settingsReducer } from './reducers/settingsReducer';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';

const store = createStore(
    combineReducers({ settings: settingsReducer }),
    applyMiddleware(logger)
);

store.subscribe(() => {
    console.log("Store updated", store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
